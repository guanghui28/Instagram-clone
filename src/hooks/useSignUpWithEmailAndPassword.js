import { doc, setDoc } from "firebase/firestore";
import { auth, fireStore } from "../firebase/firebase";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";

const useSignUpWithEmailAndPassword = () => {
	const [createUserWithEmailAndPassword, loading, error] =
		useCreateUserWithEmailAndPassword(auth);

	const signup = async ({ email, username, fullName, password }) => {
		if (!email || !username || !fullName || !password) {
			return toast.error("Please fill all the fields");
		}
		try {
			const newUser = await createUserWithEmailAndPassword(email, password);
			if (!newUser) {
				return toast.error("Email was registered");
			}

			if (error) {
				return toast.error(error.message);
			}

			if (newUser) {
				const userDoc = {
					uid: newUser.user.uid,
					email,
					username,
					password,
					bio: "",
					profilePicUrl: "",
					followers: [],
					posts: [],
					createdAt: Date.now(),
				};

				await setDoc(doc(fireStore, "users", newUser.user.uid), userDoc);
				localStorage.setItem("user-info", JSON.stringify(userDoc));
			}
		} catch (error) {
			console.log(error);
		}
	};

	return { loading, error, signup };
};

export default useSignUpWithEmailAndPassword;
