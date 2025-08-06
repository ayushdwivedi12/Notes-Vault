import toast from "react-hot-toast";

export const useConfirm = () => {
  const confirm = ({ message = "Are you sure?", onConfirm }) => {
    toast.custom((t) => (
      <div className="bg-white shadow-md p-4 rounded-md border border-gray-200 w-[300px] text-sm flex flex-col gap-3">
        <p>{message}</p>
        <div className="flex justify-end gap-2">
          <button
            onClick={async () => {
              toast.dismiss(t.id);
              await onConfirm?.();
            }}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Yes
          </button>
          <button
            onClick={() => toast.dismiss(t.id)}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    ));
  };

  return { confirm };
};
