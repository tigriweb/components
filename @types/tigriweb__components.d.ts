declare module "@tigriweb/components/attributes/TwebBlockCheckboxControl" {
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
declare module "@tigriweb/components/attributes/TwebBlockColorGradientControl" {
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
declare module "@tigriweb/components/attributes/TwebBlockHtmlControl" {
    export default TwebBlockHtmlControl;
    function TwebBlockHtmlControl({ label, help }: {
        label: any;
        help: any;
    }): import("react").JSX.Element;
}
declare module "@tigriweb/components/primitives/TwebSVG" {
    export default TwebSVG;
    function TwebSVG({ icon, size, stroke }: {
        icon: any;
        size?: number;
        stroke?: number;
    }): import("react").JSX.Element;
}
declare module "@tigriweb/components/primitives" {
    export { default as TwebSVG } from "@tigriweb/components/primitives/TwebSVG";
}
declare module "@tigriweb/components/attributes/TwebBlockIconControl" {
    export default TwebBlockIconControl;
    function TwebBlockIconControl({ label, help, name, attributes, setAttributes }: {
        label: any;
        help: any;
        name: any;
        attributes: any;
        setAttributes: any;
    }): import("react").JSX.Element;
}
declare module "@tigriweb/components/attributes/TwebBlockMediaControl" {
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
declare module "@tigriweb/components/attributes/TwebBlockPostTypeControl" {
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
declare module "@tigriweb/components/attributes/TwebBlockPostTypeMultipleControl" {
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
declare module "@tigriweb/components/attributes/TwebBlockRadioControl" {
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
declare module "@tigriweb/components/attributes/TwebBlockRangeControl" {
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
declare module "@tigriweb/components/attributes/TwebBlockSelectControl" {
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
declare module "@tigriweb/components/attributes/TwebBlockTaxonomyControl" {
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
declare module "@tigriweb/components/attributes/TwebBlockTaxonomySelectControl" {
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
declare module "@tigriweb/components/attributes/TwebBlockTextControl" {
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
declare module "@tigriweb/components/attributes/TwebBlockTextareaControl" {
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
declare module "@tigriweb/components/helpers/twebWithPostMeta" {
    export default twebWithPostMeta;
    function twebWithPostMeta(WrappedComponent: any): any;
}
declare module "@tigriweb/components/helpers/twebGetTextFromArray" {
    export default twebGetTextFromArray;
    function twebGetTextFromArray(textData: any, metaValue: any): any;
}
declare module "@tigriweb/components/helpers" {
    export { default as twebWithPostMeta } from "@tigriweb/components/helpers/twebWithPostMeta";
    export { default as twebGetTextFromArray } from "@tigriweb/components/helpers/twebGetTextFromArray";
}
declare module "@tigriweb/components/attributes/TwebBlockToggleControl" {
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
declare module "@tigriweb/components/attributes/TwebToolbarButton" {
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
declare module "@tigriweb/components/attributes/TwebToolbarGroup" {
    export default TwebToolbarGroup;
    function TwebToolbarGroup({ label, groupData, name, attributes, setAttributes }: {
        label: any;
        groupData: any;
        name: any;
        attributes: any;
        setAttributes: any;
    }): import("react").JSX.Element;
}
declare module "@tigriweb/components/attributes" {
    export { default as TwebBlockCheckboxControl } from "@tigriweb/components/attributes/TwebBlockCheckboxControl";
    export { default as TwebBlockHtmlControl } from "@tigriweb/components/attributes/TwebBlockHtmlControl";
    export { default as TwebBlockIconControl } from "@tigriweb/components/attributes/TwebBlockIconControl";
    export { default as TwebBlockMediaControl } from "@tigriweb/components/attributes/TwebBlockMediaControl";
    export { default as TwebBlockPostTypeControl } from "@tigriweb/components/attributes/TwebBlockPostTypeControl";
    export { default as TwebBlockPostTypeMultipleControl } from "@tigriweb/components/attributes/TwebBlockPostTypeMultipleControl";
    export { default as TwebBlockRadioControl } from "@tigriweb/components/attributes/TwebBlockRadioControl";
    export { default as TwebBlockRangeControl } from "@tigriweb/components/attributes/TwebBlockRangeControl";
    export { default as TwebBlockSelectControl } from "@tigriweb/components/attributes/TwebBlockSelectControl";
    export { default as TwebBlockTaxonomyControl } from "@tigriweb/components/attributes/TwebBlockTaxonomyControl";
    export { default as TwebBlockTaxonomySelectControl } from "@tigriweb/components/attributes/TwebBlockTaxonomySelectControl";
    export { default as TwebBlockTextareaControl } from "@tigriweb/components/attributes/TwebBlockTextareaControl";
    export { default as TwebBlockTextControl } from "@tigriweb/components/attributes/TwebBlockTextControl";
    export { default as TwebBlockToggleControl } from "@tigriweb/components/attributes/TwebBlockToggleControl";
    export { default as TwebBlockColorGradientControl } from "@tigriweb/components/attributes/TwebBlockColorGradientControl";
    export { default as TwebToolbarButton } from "@tigriweb/components/attributes/TwebToolbarButton";
    export { default as TwebToolbarGroup } from "@tigriweb/components/attributes/TwebToolbarGroup";
}
declare module "@tigriweb/components/controls/TwebBlockAppenderButton" {
    export default TwebBlockAppenderButton;
    function TwebBlockAppenderButton({ className, label, labelText, clientId }: {
        className: any;
        label: any;
        labelText: any;
        clientId: any;
    }): import("react").JSX.Element;
}
declare module "@tigriweb/components/controls/TwebBlockDraggableSpots" {
    export default TwebBlockDraggableSpots;
    function TwebBlockDraggableSpots({ name, attributes, setAttributes }: {
        name: any;
        attributes: any;
        setAttributes: any;
    }): import("react").JSX.Element;
}
declare module "@tigriweb/components/controls/TwebBlockMedia" {
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
declare module "@tigriweb/components/controls/TwebBlockRichHeading" {
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
declare module "@tigriweb/components/controls/TwebBlockRichText" {
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
declare module "@tigriweb/components/controls/TwebBlockRingText" {
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
declare module "@tigriweb/components/controls" {
    export { default as TwebBlockAppenderButton } from "@tigriweb/components/controls/TwebBlockAppenderButton";
    export { default as TwebBlockDraggableSpots } from "@tigriweb/components/controls/TwebBlockDraggableSpots";
    export { default as TwebBlockMedia } from "@tigriweb/components/controls/TwebBlockMedia";
    export { default as TwebBlockRichHeading } from "@tigriweb/components/controls/TwebBlockRichHeading";
    export { default as TwebBlockRichText } from "@tigriweb/components/controls/TwebBlockRichText";
    export { default as TwebBlockRingText } from "@tigriweb/components/controls/TwebBlockRingText";
}
declare module "@tigriweb/components/meta/TwebMetaCheckboxControl" {
    export default TwebMetaCheckboxControl;
    const TwebMetaCheckboxControl: any;
}
declare module "@tigriweb/components/meta/TwebMetaColorControl" {
    export default TwebMetaColorControl;
    const TwebMetaColorControl: any;
}
declare module "@tigriweb/components/meta/TwebMetaHtmlControl" {
    export default TwebMetaHtmlControl;
    function TwebMetaHtmlControl({ label, help }: {
        label: any;
        help: any;
    }): import("react").JSX.Element;
}
declare module "@tigriweb/components/meta/TwebMetaIconControl" {
    export default TwebMetaIconControl;
    const TwebMetaIconControl: any;
}
declare module "@tigriweb/components/meta/TwebMetaMediaControl" {
    export default TwebMetaMediaControl;
    const TwebMetaMediaControl: any;
}
declare module "@tigriweb/components/meta/TwebMetaPostTypeControl" {
    export default TwebMetaPostTypeControl;
    const TwebMetaPostTypeControl: any;
}
declare module "@tigriweb/components/meta/TwebMetaRadioControl" {
    export default TwebMetaRadioControl;
    const TwebMetaRadioControl: any;
}
declare module "@tigriweb/components/meta/TwebMetaRangeControl" {
    export default TwebMetaRangeControl;
    const TwebMetaRangeControl: any;
}
declare module "@tigriweb/components/meta/TwebMetaSelectControl" {
    export default TwebMetaSelectControl;
    const TwebMetaSelectControl: any;
}
declare module "@tigriweb/components/meta/TwebMetaTaxonomyControl" {
    export default TwebMetaTaxonomyControl;
    const TwebMetaTaxonomyControl: any;
}
declare module "@tigriweb/components/meta/TwebMetaTextControl" {
    export default TwebMetaTextControl;
    const TwebMetaTextControl: any;
}
declare module "@tigriweb/components/meta/TwebMetaTextareaControl" {
    export default TwebMetaTextareaControl;
    const TwebMetaTextareaControl: any;
}
declare module "@tigriweb/components/meta/TwebMetaToggleControl" {
    export default TwebMetaToggleControl;
    const TwebMetaToggleControl: any;
}
declare module "@tigriweb/components/meta" {
    export { default as TwebMetaCheckboxControl } from "@tigriweb/components/meta/TwebMetaCheckboxControl";
    export { default as TwebMetaColorControl } from "@tigriweb/components/meta/TwebMetaColorControl";
    export { default as TwebMetaHtmlControl } from "@tigriweb/components/meta/TwebMetaHtmlControl";
    export { default as TwebMetaIconControl } from "@tigriweb/components/meta/TwebMetaIconControl";
    export { default as TwebMetaMediaControl } from "@tigriweb/components/meta/TwebMetaMediaControl";
    export { default as TwebMetaPostTypeControl } from "@tigriweb/components/meta/TwebMetaPostTypeControl";
    export { default as TwebMetaRadioControl } from "@tigriweb/components/meta/TwebMetaRadioControl";
    export { default as TwebMetaRangeControl } from "@tigriweb/components/meta/TwebMetaRangeControl";
    export { default as TwebMetaSelectControl } from "@tigriweb/components/meta/TwebMetaSelectControl";
    export { default as TwebMetaTaxonomyControl } from "@tigriweb/components/meta/TwebMetaTaxonomyControl";
    export { default as TwebMetaTextareaControl } from "@tigriweb/components/meta/TwebMetaTextareaControl";
    export { default as TwebMetaTextControl } from "@tigriweb/components/meta/TwebMetaTextControl";
    export { default as TwebMetaToggleControl } from "@tigriweb/components/meta/TwebMetaToggleControl";
}
