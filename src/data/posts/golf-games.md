---
title: Golf games
published: 2023-08-10
updated: 2023-08-11
description: Some stuff about my Golf Games
---

## What is Golf Games

Golf Games are all my games I've developed in the context of golf, the first version was made with JavaScript, the second and currently used version was made with [SvelteKit](https://kit.svelte.dev), which is a JavaScript Framework and the full stack Verison of [Svelte](https://svelte.dev).

## Why did I decide to develop Golf Games?

I decided to develop Golf Games, because I love to play Golf and got an Handicap of 33.2, which is quite alright, I improved myself from 54, which is the start Handicap, to 36.6 in just one tournament, and then played a second one a few months later and improved to 34.5, then I played a third tournament and improved to 33.3, after one year of break playing tournaments, I played a fourth just a few weeks ago and got my current Handicap of **33.2**.

## What is Golf games about?

Golf Games (Golf) is about three different Games, the first one is called 4 Winning, the second one is called Exact, the third and for now last game is Precision

### 4 Winning

4 Winning is like four in a row, with some modification, the first modifaction is, that the game board has more columns and rows then a normal four in row, a normal four in row has a game board of 4x4, my version of four in a row has 8 columns and 9 rows, including the columns at the full right and full left, which just show the lateral deviation you are allowed to play in one of the diffrent modes you can play the game in.

### Exact

Exact is a game which goal it is to play exact as possible to a few numbers, for example every tens give 3 points and all numbers with twice the same number are giving 3 Points, 100 meters gives 5 points, everything above 100 and below 5 gives -1 Points.

## How is Golf games made?

Golf games is made with Svelte and the whole gameboard is stored as an Object:

For example for 4 Winning the Object looks like this:

```typescript
interface Row {
	side: string;
	data: string[];
}

let rows: Row[] = [
	{
		side: '1 meter',
		data: ['10-11', '12-13', '14-15', '16-17', '18-19', '20-21', '22-23']
	},
	{
		side: '1 meter',
		data: ['24-25', '26-27', '28-29', '30-31', '32-33', '34-35', '36-37']
	},
	{
		side: '2 meters',
		data: ['38-40', '41-43', '44-46', '47-49', '50-52', '53-55', '56-58']
	},
	{
		side: '2 meters',
		data: ['59-61', '62-64', '65-67', '68-70', '71-73', '74-76', '77-79']
	},
	{
		side: '3 meters',
		data: ['80-82', '83-85', '86-88', '89-91', '92-94', '95-97', '98-100']
	},
	{
		side: '3 meters',
		data: ['101-103', '104-106', '107-109', '110-112', '113-115', '116-118', '119-121']
	},
	{
		side: '4 meters',
		data: ['122-124', '125-127', '128-130', '131-133', '134-136', '137-139', '140-142']
	},
	{
		side: '4 meters',
		data: ['143-145', '146-148', '149-151', '152-154', '155-157', '158-160', '161-163']
	}
];
```

The whole object is then rendered with a Svelte each loop in a table Element:

```svelte
<table>
	{#each rows as { side, data }, outerIndex}
		<tbody id={`row${outerIndex + 1}`}>
			<tr>
				<td class="points">{side}</td>
				{#each data as value, innerIndex}
					<td
						class="meters"
						id={`row${outerIndex + 1}-${innerIndex}`}
						on:click={() => HandleEvent(outerIndex, innerIndex)}
					>
						{value}
					</td>
				{/each}
				<td class="points">{side}</td>
			</tr>
		</tbody>
	{/each}
</table>
```

Then the all the functions got inplemented, the basis of the game is stored in a Svelte Component and gets the size of the game (so how many teams) from the +page.svelte, where the componet is implemented as follows:

```svelte
<script lang="ts">
	import FourWinning from '$lib/components/FourWinning.svelte';

	interface Team {
		color: string;
		data: string[];
	}

	let teams: Team[] = [
		{ color: 'red', data: [] },
		{ color: 'blue', data: [] }
	];
</script>

<FourWinning {teams} />
```

## Used Packages

I'm not using any extra packages currently except SASS and TypeScript, so I can write cleaner and better JavaScript code, as well as the style tags are very easy to read and safes time to write.
