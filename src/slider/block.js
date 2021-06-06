import "./style.scss";
import "./editor.scss";

const { registerBlockType } = wp.blocks;
const { MediaUpload, MediaUploadCheck } = wp.editor;
const { Button } = wp.components;

registerBlockType("freeman-block/slider", {
	title: "スライダー",
	icon: (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 50 50"
		>
			<g fill="#1a1311">
				<path d="M23.262 21.635v1.432h17.764v-2.186h-17.01a.735.735 0 00-.754.754zM23.264 34.746l-.007 7.306h17.769v-7.306z" />
				<path d="M10.673 22.417a13.9 13.9 0 0113.8-13.968h16.551V0H0v42.056h10.673z" />
			</g>
			<path
				d="M24.475 9.628a12.728 12.728 0 00-12.637 12.789v19.641h10.257l.007-8.487h18.932V24.25H22.095v-2.615a1.9 1.9 0 011.92-1.928h17.009V9.628z"
				fill="#1a1311"
			/>
			<path
				d="M39.971 10.807h-15.5a11.54 11.54 0 00-11.472 11.61v18.554h7.925l.007-8.581h19.041v-6.962h-19.04v-3.794a3.083 3.083 0 013.085-3.107h15.954z"
				fill="#dc0016"
				stroke="#dc0016"
				stroke-miterlimit="2"
				stroke-width=".75"
			/>
		</svg>
	),
	category: "media",
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
							<div className="swiper-slide">
								<img src={url[i]} alt={alt[i]} />
							</div>
						);
					} else {
						image_elem = (
							<div className="swiper-slide">
								<img src={url[i]} alt="" aria-hidden="true" />
							</div>
						);
					}
				}
				imagesArray.push(image_elem);
			}
			return imagesArray;
		};

		return (
			<div className="swiper-container single-slider js-single-slider">
				<div className="swiper-wrapper">
					{getImagesSave(attributes.imageUrl, attributes.imageAlt)}
				</div>
				<div className="single-slider__box">
					<div className="swiper-button-prev"></div>
					<div className="swiper-button-next"></div>
					<div className="swiper-pagination"></div>
				</div>
			</div>
		);
	},
});
