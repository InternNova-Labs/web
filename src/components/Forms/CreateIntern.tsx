import { Tag } from "@prisma/client";
import { useState } from "react";
import DropDownList from "components/Forms/Components/DropDownList";
import FormWrapper from "components/Forms/Components/FormWrapper";
import TextBox from "components/Forms/Components/TextBox";
import Loading from "components/Loading";
import { useRouter } from "next/router";

const values = Object.values(Tag);

type CreateInternProps = {
  email: string;
};

const CreateIntern = (props: CreateInternProps) => {
  const router = useRouter();
  const [userFullName, setUserFullName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [bio, setBio] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [interests, setInterests] = useState<string[]>([]);

  if (loading) return <Loading />;

  return (
    <FormWrapper title="Sign Up">
      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (bio.length < 100) {
            setError("Write a longer bio, at least 100 characters");
            return;
          } else if (interests.length < 1) {
            setError("Choose at least one interest");
            return;
          } else if (userFullName.length < 10) {
            setError("Write a longer name, at least 10 characters");
          }
          try {
            setLoading(true);

            const createUserAndIntern = {
              email: props.email,
              name: userFullName,
              role: "INTERN",
              bio,
              interests: interests,
            };
            fetch("/api/db/createUserAndIntern", {
              method: "POST",
              body: JSON.stringify(createUserAndIntern),
              headers: {
                "Content-Type": "application/json",
              },
            }).then((text) => {
              text.json().then((data) => {
                if (data.error) {
                  setError(data.error);
                } else {
                  router.push("/accepted");
                }
              });
            });
            /*eslint-disable*/
          } catch (e: any) {
            setLoading(false);
            setError(e?.message);
          }
        }}
      >
        <div>
          <h3 className="text-red-500">{error}</h3>
        </div>
        <div className="mt-5">
          <TextBox
            title="Full Name"
            placeholder="Full Name"
            value={userFullName}
            setValue={setUserFullName}
            minLength={10}
            maxLength={100}
          />
        </div>
        <DropDownList
          values={values}
          title="Choose your interests"
          description="Choose at least one interest"
          setChosenValues={setInterests}
        />
        <div className={`flex flex-col gap-1`}>
          <h3 className="text-muted1 text-sm font-semibold uppercase">
            A bit about yourself
          </h3>
          <textarea
            placeholder="Enter A bio"
            className="h-60 text-grey-700 p-5 mb-5 border rounded-md"
            required
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            minLength={100}
            maxLength={1000}
          />
        </div>
        <div className="my-5">
          <button type="submit" className="button w-full">
            Sign Up
          </button>
        </div>
      </form>
    </FormWrapper>
  );
};

export default CreateIntern;
