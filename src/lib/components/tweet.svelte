<script lang="ts">
	// Courtesy of https://codepen.io/JackRogers0/pen/QWKMJaP
    import defaultTwitterProfilePic from '$lib/assets/twtr_default_profile.png';
	import type Tweet from '$lib/types/tweet';
	import { DateTime } from 'luxon';

	export let tweet: Tweet;
	export let anonymised = true;

	function formatDateTime(dtime: Date) {
		const luxonDtime = new DateTime(dtime);

		return `${luxonDtime.toLocaleString(DateTime.TIME_24_SIMPLE)} · ${luxonDtime.toLocaleString(DateTime.DATE_MED)}`;
	}
</script>

<div class="tweet">
	<section class="row">
        <div class="profile">
            <img src={defaultTwitterProfilePic} alt="Stylised anonymous human head shape" />
            <span class="name" class:anonymised>{anonymised ? 'Anon Anonymous' : tweet.name}</span>
            <span class="tag" class:anonymised>@{anonymised ? 'anonAnonymous' : tweet.handle}</span>
        </div>
		<svg viewBox="0 0 24 24" class="twitter-logo">
			<g>
				<path
					d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"
				/>
			</g>
		</svg>
	</section>

	<div class="row body">
		{tweet.text}
	</div>

	<section class="row date">{formatDateTime(tweet.createdAt)}</section>
	<hr />

	<section class="row stats">
		<svg viewBox="0 0 24 24" class="heart-svg" style="">
			<g>
				<path
					d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"
				/>
			</g>
		</svg>

		<span class="likes">{tweet.likes}+</span>

		<svg viewBox="0 0 24 24" class="comments-svg">
			<g><path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path></g>
		</svg>

		<span class="comments">{tweet.retweets}+</span>
	</section>
</div>

<style lang="scss">
	* {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu,
			'Helvetica Neue', sans-serif;
		box-sizing: border-box;
	}

	a {
		text-decoration: none;
	}

	$twitter-grey: rgb(204, 214, 221);

	.tweet {
		border-radius: 15px;
		border: $twitter-grey solid 1px;
		background-color: #ffffff;
		position: relative;
		/**/
		max-width: 550px;
		height: min-content;
		/**/

		padding: 10px 15px;

		.row {
			display: flex;
			flex-direction: row;
		}

		.profile {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr 1fr;
			gap: 0px 0px;
			grid-template-areas:
				'img name'
				'img tag';
			grid-template-columns: 55px auto;

			img {
				grid-area: img;
				border-radius: 50%;
				width: 49px;
				height: 49px;
			}
			.name {
				font-size: 15px;
				grid-area: name;
				line-height: 1.3125;
				font-weight: bold;
				color: rgb(20, 23, 26);
			}
			.tag {
				grid-area: tag;
				font-weight: 300;
				color: rgb(101, 119, 134);
				line-height: 1.3125;
				position: relative;
				top: -4px;
			}
		}

		.twitter-logo {
			position: absolute;
			top: 15px;
			right: 15px;
			color: rgb(29, 161, 242);
			fill: currentcolor;
			width: 25px;
			height: 25px;
		}

		.body {
			margin-top: 10px;
			font-size: 20px;
			font-weight: 400;
			color: rgb(20, 23, 26);
			line-height: 1.3125;
		}

		.date {
			margin-top: 5px;
			color: rgb(101, 119, 134);
		}
		hr {
			margin: 10px 0px 5px 0px;
			display: block;
			height: 1px;
			border: 0;
			border-top: 1px solid $twitter-grey;
			padding: 0;
		}

		.stats {
			align-items: center;
			svg {
				color: rgb(101, 119, 134);
				fill: currentcolor;
				width: 24px;
				height: 24px;
				margin-right: 10px;
			}
			span {
				color: rgb(101, 119, 134);
				line-height: 1.3125;
				font-size: 17px;
				margin-right: 30px;
			}
		}
	}

	.anonymised {
		filter: blur(5px);
	}
</style>
