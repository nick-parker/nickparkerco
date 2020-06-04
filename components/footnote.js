export default function Footnote({num, children}) {
    return (
    <div className="text-left sm:text-sm md:text-lg py-4 mx-auto">
        [{num}]: {children}
    </div>
    )
}