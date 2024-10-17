export default TwebBlockMediaControl;
declare function TwebBlockMediaControl({ label, help, name, onSelect, attributes, setAttributes }: {
    label: any;
    help: any;
    name: any;
    onSelect: any;
    attributes: any;
    setAttributes: any;
}): import("react").JSX.Element;
declare namespace TwebBlockMediaControl {
    function Render({ mediaId, isBackground, className }: {
        mediaId?: number;
        isBackground?: boolean;
        className?: string;
    }): import("react").JSX.Element;
}
