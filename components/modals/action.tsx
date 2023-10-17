import AppButton from "../button";

interface ActionModalType {
  onActionClick: (value?: any) => void;
  onCancelClick: () => void;
  description: string;
  loading: boolean;
}

const ActionModal = ({
  loading,
  onActionClick,
  onCancelClick,
  description,
}: ActionModalType) => {
  return (
    <div className="w-full flex flex-col items-center gap-10">
      <p className="text-center text-sm lg:text-base">{description}</p>
      <div className="flex items-center gap-4">
        <AppButton
          type="submit"
          variant="secondary"
          size="medium"
          width="w-[134px]"
          onClick={onCancelClick}
        >
          Cancel
        </AppButton>
        <AppButton
          type="button"
          variant="primary"
          size="medium"
          width="w-[134px]"
          onClick={onActionClick}
          disabled={loading}
          loading={loading}
        >
          Proceed
        </AppButton>
      </div>
    </div>
  );
};

export default ActionModal;
