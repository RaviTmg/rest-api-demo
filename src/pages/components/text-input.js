
export default function TextInput({ value, onChange, type = "string" }) {
    return (
        <input
            type={type}
            className="border border-gray-500 rounded-lg focus:outline-red-700 px-1"
            value={value}
            onChange={onChange}
        />
    );
}
