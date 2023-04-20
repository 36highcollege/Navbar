
export default function Button(props: any) {
    const { label } = props;
    return (
        <>
            <button className="h-14 w-36 bg-teal-300 hover:scale-90 rounded-md transition-all duration-500 text-xl font-semibold">
                {label}
            </button>
        </>
    )
}