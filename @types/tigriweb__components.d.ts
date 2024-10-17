declare module "attributes/TwebBlockCheckboxControl" {
    export default TwebBlockCheckboxControl;
    function TwebBlockCheckboxControl({ label, help, name, onChange, attributes, setAttributes }: {
        label: any;
        help: any;
        name: any;
        onChange: any;
        attributes: any;
        setAttributes: any;
    }): import("react").JSX.Element;
}
declare module "attributes/TwebBlockColorGradientControl" {
    export default TwebBlockColorGradientControl;
    function TwebBlockColorGradientControl({ label, nameColor, nameGradient, onColorChange, onGradientChange, attributes, setAttributes }: {
        label: any;
        nameColor: any;
        nameGradient: any;
        onColorChange: any;
        onGradientChange: any;
        attributes: any;
        setAttributes: any;
    }): import("react").JSX.Element;
}
declare module "attributes/TwebBlockHtmlControl" {
    export default TwebBlockHtmlControl;
    function TwebBlockHtmlControl({ label, help }: {
        label: any;
        help: any;
    }): import("react").JSX.Element;
}
declare module "primitives/TwebSVG" {
    export default TwebSVG;
    function TwebSVG({ icon, size, stroke }: {
        icon: any;
        size?: number;
        stroke?: number;
    }): import("react").JSX.Element;
}
declare module "primitives/index" {
    export { default as TwebSVG } from "./TwebSVG";
}
declare module "attributes/TwebBlockIconControl" {
    export default TwebBlockIconControl;
    function TwebBlockIconControl({ label, help, name, attributes, setAttributes }: {
        label: any;
        help: any;
        name: any;
        attributes: any;
        setAttributes: any;
    }): import("react").JSX.Element;
}
declare module "attributes/TwebBlockMediaControl" {
    export default TwebBlockMediaControl;
    function TwebBlockMediaControl({ label, help, name, onSelect, attributes, setAttributes }: {
        label: any;
        help: any;
        name: any;
        onSelect: any;
        attributes: any;
        setAttributes: any;
    }): import("react").JSX.Element;
    namespace TwebBlockMediaControl {
        function Render({ mediaId, isBackground, className }: {
            mediaId?: number;
            isBackground?: boolean;
            className?: string;
        }): import("react").JSX.Element;
    }
}
declare module "attributes/TwebBlockPostTypeControl" {
    export default TwebBlockPostTypeControl;
    function TwebBlockPostTypeControl({ label, help, postType, name, onChange, attributes, setAttributes }: {
        label: any;
        help: any;
        postType: any;
        name: any;
        onChange: any;
        attributes: any;
        setAttributes: any;
    }): import("react").JSX.Element;
}
declare module "attributes/TwebBlockPostTypeMultipleControl" {
    export default TwebBlockPostTypeMultipleControl;
    function TwebBlockPostTypeMultipleControl({ label, help, postType, name, onChange, attributes, setAttributes }: {
        label: any;
        help: any;
        postType: any;
        name: any;
        onChange: any;
        attributes: any;
        setAttributes: any;
    }): import("react").JSX.Element;
}
declare module "attributes/TwebBlockRadioControl" {
    export default TwebBlockRadioControl;
    function TwebBlockRadioControl({ label, help, choices, name, attributes, setAttributes }: {
        label: any;
        help: any;
        choices: any;
        name: any;
        attributes: any;
        setAttributes: any;
    }): import("react").JSX.Element;
}
declare module "attributes/TwebBlockRangeControl" {
    export default TwebBlockRangeControl;
    function TwebBlockRangeControl({ label, help, min, max, step, name, onChange, attributes, setAttributes }: {
        label: any;
        help: any;
        min?: number;
        max: any;
        step?: number;
        name: any;
        onChange: any;
        attributes: any;
        setAttributes: any;
    }): import("react").JSX.Element;
}
declare module "attributes/TwebBlockSelectControl" {
    export default TwebBlockSelectControl;
    function TwebBlockSelectControl({ label, help, choices, name, onChange, attributes, setAttributes }: {
        label: any;
        help: any;
        choices: any;
        name: any;
        onChange: any;
        attributes: any;
        setAttributes: any;
    }): import("react").JSX.Element;
}
declare module "attributes/TwebBlockTaxonomyControl" {
    export default TwebBlockTaxonomyControl;
    function TwebBlockTaxonomyControl({ label, help, taxonomy, name, onChange, attributes, setAttributes }: {
        label: any;
        help: any;
        taxonomy: any;
        name: any;
        onChange: any;
        attributes: any;
        setAttributes: any;
    }): import("react").JSX.Element;
}
declare module "attributes/TwebBlockTaxonomySelectControl" {
    export default TwebBlockTaxonomySelectControl;
    function TwebBlockTaxonomySelectControl({ label, help, taxonomy, name, onChange, attributes, setAttributes }: {
        label: any;
        help: any;
        taxonomy: any;
        name: any;
        onChange: any;
        attributes: any;
        setAttributes: any;
    }): import("react").JSX.Element;
}
declare module "attributes/TwebBlockTextControl" {
    export default TwebBlockTextControl;
    function TwebBlockTextControl({ label, help, name, onChange, attributes, setAttributes }: {
        label: any;
        help: any;
        name: any;
        onChange: any;
        attributes: any;
        setAttributes: any;
    }): import("react").JSX.Element;
}
declare module "attributes/TwebBlockTextareaControl" {
    export default TwebBlockTextareaControl;
    function TwebBlockTextareaControl({ label, help, name, onChange, attributes, setAttributes }: {
        label: any;
        help: any;
        name: any;
        onChange: any;
        attributes: any;
        setAttributes: any;
    }): import("react").JSX.Element;
}
declare module "helpers/twebWithPostMeta" {
    export default twebWithPostMeta;
    function twebWithPostMeta(WrappedComponent: any): any;
}
declare module "helpers/twebGetTextFromArray" {
    export default twebGetTextFromArray;
    function twebGetTextFromArray(textData: any, metaValue: any): any;
}
declare module "helpers/index" {
    export { default as twebWithPostMeta } from "./twebWithPostMeta";
    export { default as twebGetTextFromArray } from "./twebGetTextFromArray";
}
declare module "attributes/TwebBlockToggleControl" {
    export default TwebBlockToggleControl;
    function TwebBlockToggleControl({ label, help, name, onChange, attributes, setAttributes }: {
        label: any;
        help: any;
        name: any;
        onChange: any;
        attributes: any;
        setAttributes: any;
    }): import("react").JSX.Element;
}
declare module "attributes/TwebToolbarButton" {
    export default TwebToolbarButton;
    function TwebToolbarButton({ label, icon, name, onClick, attributes, setAttributes }: {
        label: any;
        icon: any;
        name: any;
        onClick: any;
        attributes: any;
        setAttributes: any;
    }): import("react").JSX.Element;
}
declare module "attributes/TwebToolbarGroup" {
    export default TwebToolbarGroup;
    function TwebToolbarGroup({ label, groupData, name, attributes, setAttributes }: {
        label: any;
        groupData: any;
        name: any;
        attributes: any;
        setAttributes: any;
    }): import("react").JSX.Element;
}
declare module "attributes/index" {
    export { default as TwebBlockCheckboxControl } from "./TwebBlockCheckboxControl";
    export { default as TwebBlockHtmlControl } from "./TwebBlockHtmlControl";
    export { default as TwebBlockIconControl } from "./TwebBlockIconControl";
    export { default as TwebBlockMediaControl } from "./TwebBlockMediaControl";
    export { default as TwebBlockPostTypeControl } from "./TwebBlockPostTypeControl";
    export { default as TwebBlockPostTypeMultipleControl } from "./TwebBlockPostTypeMultipleControl";
    export { default as TwebBlockRadioControl } from "./TwebBlockRadioControl";
    export { default as TwebBlockRangeControl } from "./TwebBlockRangeControl";
    export { default as TwebBlockSelectControl } from "./TwebBlockSelectControl";
    export { default as TwebBlockTaxonomyControl } from "./TwebBlockTaxonomyControl";
    export { default as TwebBlockTaxonomySelectControl } from "./TwebBlockTaxonomySelectControl";
    export { default as TwebBlockTextareaControl } from "./TwebBlockTextareaControl";
    export { default as TwebBlockTextControl } from "./TwebBlockTextControl";
    export { default as TwebBlockToggleControl } from "./TwebBlockToggleControl";
    export { default as TwebBlockColorGradientControl } from "./TwebBlockColorGradientControl";
    export { default as TwebToolbarButton } from "./TwebToolbarButton";
    export { default as TwebToolbarGroup } from "./TwebToolbarGroup";
}
declare module "controls/TwebBlockAppenderButton" {
    export default TwebBlockAppenderButton;
    function TwebBlockAppenderButton({ className, label, labelText, clientId }: {
        className: any;
        label: any;
        labelText: any;
        clientId: any;
    }): import("react").JSX.Element;
}
declare module "controls/TwebBlockDraggableSpots" {
    export default TwebBlockDraggableSpots;
    function TwebBlockDraggableSpots({ name, attributes, setAttributes }: {
        name: any;
        attributes: any;
        setAttributes: any;
    }): import("react").JSX.Element;
}
declare module "controls/TwebBlockMedia" {
    export default TwebBlockMedia;
    function TwebBlockMedia({ name, size, value, onSelect, customUrl, attributes, setAttributes }: {
        name: any;
        size: any;
        value: any;
        onSelect: any;
        customUrl: any;
        attributes: any;
        setAttributes: any;
    }): import("react").JSX.Element;
    namespace TwebBlockMedia {
        function Content({ value }: {
            value: any;
        }): import("react").JSX.Element;
    }
}
declare module "controls/TwebBlockRichHeading" {
    export default TwebBlockRichHeading;
    function TwebBlockRichHeading({ className, value, allowedFormats, onChange, placeholder, name, attributes, setAttributes }: {
        className: any;
        value: any;
        allowedFormats: any;
        onChange: any;
        placeholder: any;
        name: any;
        attributes: any;
        setAttributes: any;
    }): import("react").JSX.Element;
    namespace TwebBlockRichHeading {
        function Content({ className, value }: {
            className: any;
            value: any;
        }): import("react").JSX.Element;
    }
}
declare module "controls/TwebBlockRichText" {
    export default TwebBlockRichText;
    function TwebBlockRichText({ tagName, className, value, allowedFormats, onChange, placeholder, name, attributes, setAttributes }: {
        tagName: any;
        className: any;
        value: any;
        allowedFormats: any;
        onChange: any;
        placeholder: any;
        name: any;
        attributes: any;
        setAttributes: any;
    }): import("react").JSX.Element;
    namespace TwebBlockRichText {
        function Content({ tagName, className, value }: {
            tagName: any;
            className: any;
            value: any;
        }): import("react").JSX.Element;
    }
}
declare module "controls/TwebBlockRingText" {
    export default TwebBlockRingText;
    function TwebBlockRingText({ className, name, attributes, setAttributes }: {
        className: any;
        name: any;
        attributes: any;
        setAttributes: any;
    }): import("react").JSX.Element;
    namespace TwebBlockRingText {
        function Content({ className, value }: {
            className: any;
            value: any;
        }): import("react").JSX.Element;
    }
}
declare module "controls/index" {
    export { default as TwebBlockAppenderButton } from "./TwebBlockAppenderButton";
    export { default as TwebBlockDraggableSpots } from "./TwebBlockDraggableSpots";
    export { default as TwebBlockMedia } from "./TwebBlockMedia";
    export { default as TwebBlockRichHeading } from "./TwebBlockRichHeading";
    export { default as TwebBlockRichText } from "./TwebBlockRichText";
    export { default as TwebBlockRingText } from "./TwebBlockRingText";
}
declare module "meta/TwebMetaCheckboxControl" {
    export default TwebMetaCheckboxControl;
    const TwebMetaCheckboxControl: any;
}
declare module "meta/TwebMetaColorControl" {
    export default TwebMetaColorControl;
    const TwebMetaColorControl: any;
}
declare module "meta/TwebMetaHtmlControl" {
    export default TwebMetaHtmlControl;
    function TwebMetaHtmlControl({ label, help }: {
        label: any;
        help: any;
    }): import("react").JSX.Element;
}
declare module "meta/TwebMetaIconControl" {
    export default TwebMetaIconControl;
    const TwebMetaIconControl: any;
}
declare module "meta/TwebMetaMediaControl" {
    export default TwebMetaMediaControl;
    const TwebMetaMediaControl: any;
}
declare module "meta/TwebMetaPostTypeControl" {
    export default TwebMetaPostTypeControl;
    const TwebMetaPostTypeControl: any;
}
declare module "meta/TwebMetaRadioControl" {
    export default TwebMetaRadioControl;
    const TwebMetaRadioControl: any;
}
declare module "meta/TwebMetaRangeControl" {
    export default TwebMetaRangeControl;
    const TwebMetaRangeControl: any;
}
declare module "meta/TwebMetaSelectControl" {
    export default TwebMetaSelectControl;
    const TwebMetaSelectControl: any;
}
declare module "meta/TwebMetaTaxonomyControl" {
    export default TwebMetaTaxonomyControl;
    const TwebMetaTaxonomyControl: any;
}
declare module "meta/TwebMetaTextControl" {
    export default TwebMetaTextControl;
    const TwebMetaTextControl: any;
}
declare module "meta/TwebMetaTextareaControl" {
    export default TwebMetaTextareaControl;
    const TwebMetaTextareaControl: any;
}
declare module "meta/TwebMetaToggleControl" {
    export default TwebMetaToggleControl;
    const TwebMetaToggleControl: any;
}
declare module "meta/index" {
    export { default as TwebMetaCheckboxControl } from "./TwebMetaCheckboxControl";
    export { default as TwebMetaColorControl } from "./TwebMetaColorControl";
    export { default as TwebMetaHtmlControl } from "./TwebMetaHtmlControl";
    export { default as TwebMetaIconControl } from "./TwebMetaIconControl";
    export { default as TwebMetaMediaControl } from "./TwebMetaMediaControl";
    export { default as TwebMetaPostTypeControl } from "./TwebMetaPostTypeControl";
    export { default as TwebMetaRadioControl } from "./TwebMetaRadioControl";
    export { default as TwebMetaRangeControl } from "./TwebMetaRangeControl";
    export { default as TwebMetaSelectControl } from "./TwebMetaSelectControl";
    export { default as TwebMetaTaxonomyControl } from "./TwebMetaTaxonomyControl";
    export { default as TwebMetaTextareaControl } from "./TwebMetaTextareaControl";
    export { default as TwebMetaTextControl } from "./TwebMetaTextControl";
    export { default as TwebMetaToggleControl } from "./TwebMetaToggleControl";
}
//# sourceMappingURL=tigriweb__components.d.ts.map