const ErrorPopup = ({ message, onClose }) => {
    if (!message) return null; // Don't render if there's no message

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
                <h2 className="text-red-600 font-bold text-lg mb-4">Klaida</h2>
                <p className="text-gray-700">{message}</p>
                <button
                    onClick={onClose}
                    className="btn btn-primary mt-4 w-full"
                >
                    Uždaryti
                </button>
            </div>
        </div>
    );
};
export default ErrorPopup;