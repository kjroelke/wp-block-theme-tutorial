import { InnerBlocks } from '@wordpress/block-editor';

wp.blocks.registerBlockType('ourblocktheme/banner', {
	title: 'Banner',
	edit: EditComponent,
	save: SaveComponent,
});

function EditComponent() {
	const useMeLater = (
		<>
			<h1 className="headline headline--large">Welcome!</h1>
			<h2 className="headline headline--medium">
				We think you&rsquo;ll like it here.
			</h2>
			<h3 className="headline headline--small">
				Why don&rsquo;t you check out the <strong>major</strong>{' '}
				you&rsquo;re interested in?
			</h3>
			<a href="#" className="btn btn--large btn--blue">
				Find Your Major
			</a>
		</>
	);
	return (
		<section>
			<div
				className="page-banner__bg-image"
				style={{
					backgroundImage: `url('/wp-content/themes/fictional-university-block-theme/images/library-hero.jpg')`,
				}}></div>
			<div className="page-banner__content container t-center c-white">
				<InnerBlocks
					allowedBlocks={[
						'core/paragraph',
						'core/heading',
						'core/list',
					]}
				/>
			</div>
		</section>
	);
}
function SaveComponent() {
	return (
		<section>
			<div
				className="page-banner__bg-image"
				style={{
					backgroundImage: `url('/wp-content/themes/fictional-university-block-theme/images/library-hero.jpg')`,
				}}></div>
			<div className="page-banner__content container t-center c-white">
				<InnerBlocks.Content />
			</div>
		</section>
	);
}