import "./editor.scss";
import "./style.scss";

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const RichText = wp.editor.RichText;

registerBlockType("cgb/block-freeman-block", {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __("freeman-block - CGB Block"), // Block title.
	icon: "shield", // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: "common", // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__("freeman-block — CGB Block"),
		__("CGB Example"),
		__("create-guten-block"),
	],
	attributes: {
		children: {
			source: "html",
			selector: "div",
		},
	},
	edit: ({ className, setAttributes, attributes }) => {
		const { children } = attributes;
		return (
			<RichText
				tagName="div"
				className={className}
				onChange={(children) => setAttributes({ children })}
				value={children}
			/>
		);
	},
	save: ({ attributes }) => {
		const { children } = attributes;
		return <div>{children}</div>;
	},
});
