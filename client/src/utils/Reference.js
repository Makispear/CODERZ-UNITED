export default function Reference({ props }) {
    const { word, ref } = props
    return (
        <span className="inline relative">
            <span className="underline-dots relative">
                {word}
            </span>
            <span className="reference text-xs">
                {ref}
            </span>
        </span>
    )
}
