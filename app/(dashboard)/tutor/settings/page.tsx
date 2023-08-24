import { Separator } from "@/components/ui/separator";
import PasswordForm from "../../parent/settings/forms/password";
import Basic from "./forms/basic";
import Bank from "./forms/bank";
import Role from "../../parent/settings/role";
import Delete from "../../parent/settings/delete";

const Settings = () => {
  return (
    <div className="bg-white rounded-[10px] p-16 mb-16">
      <h1 className="mb-9 text-3xl font-semibold">Settings</h1>
      <div className="space-y-[60px]">
        <Basic />
        <Separator />
        <PasswordForm />
        <Separator />
        <Bank />
        <Separator />
        <Role role="Tutor" />
        <Separator />
        <Delete title="Delete Account" />
        <Separator />
      </div>
    </div>
  );
};

export default Settings;
