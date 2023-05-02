
export default function Button(props: any) {
    const { label } = props;
    return (
        <>
            <button className="py-2 px-4 bg-teal-300 hover:scale-95 rounded-md duration-500 text-lg font-semibold">
                {label}
            </button>
        </>
    )
}