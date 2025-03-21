export default function TodoStatus({ message, color = "green"}) {

    const className = `w-auto mb-2 px-4 py-2 text-${color}-600 bg-green-400-200 text-center rounded`;
    return (
        <div className="flex justify-center mt-2">
            <div className={className}>
                {message}
            </div>
        </div>
    );
}
