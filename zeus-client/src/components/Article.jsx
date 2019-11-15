import React from 'react';
const ReactMarkdown = require('react-markdown')


const ErrorLink = (props) => {
	return (
		<div style={{textAlign: 'center'}}>
			<p style={{fontSize: '18pt', fontWeight: 'bolder', color: '#aaa'}}>No Content Available</p>
			<p><a href={props.url} target='_blank' rel='noopener noreferrer'>Go to linked website</a></p>
		</div>
	)
}


const DateDisplay = (props) => {
	const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
	return (
		<>
			<p>
				<span>{props.date.slice(8, 10)} </span>
				<span>{months[props.date.slice(5, 7) - 1]}, </span>
				<span>{props.date.slice(0, 4)}</span>
			</p>
		</>
	)
}


const ArticleHeader = (props) => {
	return (
		<>
			<header className='ArticleHeader'>

				{props.date && <DateDisplay date={props.date} />}

				{props.author && (<p>{props.author}</p>)}

				<p><a href={props.url} target='_blank' rel='noopener noreferrer' className='articleLink'>
					{props.domain ? props.domain : 'Link'}
				</a></p>

			</header>
		</>
	)
}


const ArticleBody = (props) => {
	return (
		<>
			<section name='Article Content' className='ArticleBody' style={{fontFamily: props.font}}>

				<h1 className='articleTitle' style={{fontSize: `${props.fontSize * 1.85}pt`}}>{props.title}</h1>

				<div className='articleText' style={{fontSize: `${props.fontSize}pt`}}>
					{props.content
						? <ReactMarkdown source={props.content} />
						: props.excerpt
							? props.excerpt
							: <ErrorLink url={props.url} />
					}
				</div>


			</section>
		</>
	)
}


export default function Article(props) {

	return (
		<div className='Article'>

			<article className='articleInner'>

				<ArticleHeader
					date={props.data.date_published}
					author={props.data.author}
					url={props.data.url}
					domain={props.data.domain}
				/>

				<ArticleBody
					font={props.font}
					fontSize={props.fontSize}
					title={props.data.title}
					content={props.data.content}
					excerpt={props.data.excerpt}
					url={props.data.url}
				/>

			</article>
		</div>
	)
}