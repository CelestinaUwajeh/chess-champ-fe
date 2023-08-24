import { Separator } from "@/components/ui/separator";
import Basic from "./forms/basic";
import PasswordForm from "../../parent/settings/forms/password";
import Role from "../../parent/settings/role";

const Settings = () => {
  return (
    <div className="bg-white rounded-[10px] p-16 mb-16">
      <h1 className="mb-9 text-3xl font-semibold">Settings</h1>
      <div className="space-y-[60px]">
        <Basic />
        <Separator />
        <PasswordForm />
        <Separator />
        <Role role="Student" />
        <Separator />
      </div>
    </div>
  );
};

export default Settings;
