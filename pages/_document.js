import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

export default class MyDocument extends Document {

	static getInitialProps ({ renderPage }) {
		const {html, head, errorHtml, chunks} = renderPage()
		const styles = flush()
		
		return { html, head, errorHtml, chunks, styles }
	}
	
	render () {
		return (
			<html>
				<Head>
					<title key="title">Test</title>
					<meta key="description" name="description" content=""/>
					<meta key="og:url" property="og:url" content="" />
					<meta key="og:type" property="og:type" content="website" />
					<meta key="og:description" property="og:description" content="" />
					<meta key="og:image" property="og:image" content="" />
					<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
					<link rel="icon" href="" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		)
	}
}