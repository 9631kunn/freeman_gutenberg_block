import "./style.scss";
import "./editor.scss";

const { registerBlockType } = wp.blocks;
const { MediaUpload, MediaUploadCheck } = wp.editor;
const { Button } = wp.components;

registerBlockType("myblock/block-image", {
	title: "画像ブロック",
	icon: "index-card",
	category: "common",
	attributes: {
		mediaID: {
			type: "number",
		},
		imageUrl: {
			type: "array",
			default: [],
		},
		imageAlt: {
			type: "array",
			default: [],
		},
	},
	edit: (props) => {
		const { className, attributes, setAttributes } = props;

		const onSelectImage = (media) => {
			const media_ID = media.map((image) => image.id);
			const imageUrl = media.map((image) => image.url);
			const imageAlt = media.map((image) => image.alt);
			setAttributes({
				mediaID: media_ID,
				imageUrl: imageUrl,
				imageAlt: imageAlt,
			});
		};

		//URL の配列から画像を生成
		const getImages = (urls) => {
			let imagesArray = urls.map((url) => {
				return <img src={url} className="image" alt="アップロード画像" />;
			});
			return imagesArray;
		};

		//メディアライブラリを開くボタンをレンダリングする関数（上記関数を使って画像をレンダリング）
		const getImageButton = (open) => {
			if (attributes.imageUrl.length > 0) {
				return (
					<div onClick={open} className="block-container">
						{getImages(attributes.imageUrl)}
					</div>
				);
			} else {
				return (
					<div className="button-container">
						<Button onClick={open} className="button button-large">
							画像をアップロード
						</Button>
					</div>
				);
			}
		};

		//画像を削除する（メディアをリセットする）関数
		const removeMedia = () => {
			setAttributes({
				mediaID: [],
				imageUrl: [],
				imageAlt: [],
			});
		};

		return (
			<div className={className}>
				<MediaUploadCheck>
					<MediaUpload
						multiple={true}
						gallery={true}
						onSelect={onSelectImage}
						allowedTypes={["image"]}
						value={attributes.mediaID}
						render={({ open }) => getImageButton(open)}
					/>
				</MediaUploadCheck>
				{attributes.imageUrl.length != 0 && ( // imageUrl（配列の長さ）で判定
					<MediaUploadCheck>
						<Button
							onClick={removeMedia}
							isLink
							isDestructive
							className="removeImage"
						>
							画像を削除
						</Button>
					</MediaUploadCheck>
				)}
			</div>
		);
	},
	save: ({ attributes }) => {
		//画像をレンダリングする関数
		const getImagesSave = (url, alt) => {
			let image_elem;
			let imagesArray = [];

			for (let i = 0; i < url.length; i++) {
				if (url.length === 0) {
					image_elem = null;
				} else {
					if (alt[i]) {
						image_elem = (
							<img className="card_image" src={url[i]} alt={alt[i]} />
						);
					} else {
						image_elem = (
							<img
								className="card_image"
								src={url[i]}
								alt=""
								aria-hidden="true"
							/>
						);
					}
				}
				imagesArray.push(image_elem);
			}
			return imagesArray;
		};

		return (
			<div className="block-container">
				{getImagesSave(attributes.imageUrl, attributes.imageAlt)}
			</div>
		);
	},
});
