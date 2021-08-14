---
title: Terra
date: 2021-02-23
summary: A hexagon-tile terrain generation system. Dynamically generate and explore terrain. This is a generic toolkit that can be used to generate terrain for renderings, games, etc.
banner: /assets/terra/banner.png
links:
  {
    Code: "https://github.com/LucasPickering/terra-rs",
    Site: "https://terra.lucaspickering.me",
  }
tags:
  - post
  - project
  - rust
  - 3d
---

## Intro

Terra is a 3D hexagon-based terrain generation library. It provides a highly configurable series of algorithms that can generate lifelike terrain. The core library itself doesn't actually render the terrain, it just returns it in a format that makes rendering simple. It also includes a simple demo that renders the terrain in 3D, to see what it's capable of ([skip to the demo now](#demo)).

Shoutout to Amit Patel for [this post](https://www.redblobgames.com/grids/hexagons/), which has been an endless resource of information for working with hex grids.

## How does it work?

The generator takes in a configuration object that contains a bunch of parameters that define the generation process. Chief among these is the [random seed](https://en.wikipedia.org/wiki/Random_seed). Beyond that, there are lots of different levers to control how different steps in the process behave. Based on the configuration, the generator applies a series of steps to initialize the world and create terrain.

If you're curious, all the code for terrain generation [lives here](https://github.com/LucasPickering/terra-rs/tree/master/crates/core/src/world/generate).

### Step 0 - Initialize the world

We start by initializing a world based on the defined world radius in the config. Each tile is initialized but doesn't actually have any properties assigned yet. I haven't included a picture for this step because there isn't really anything to see yet.

### Step 1 - Generate elevation maps

We start by defining an elevation for each tile, using a [Perlin noise function](https://en.wikipedia.org/wiki/Perlin_noise). Once again, credit to Amit Patel with [another great post](https://www.redblobgames.com/maps/terrain-from-noise/) that explains noise-based terrain generation.

At this point, our terrain map looks something like this, where each tile has an elevation defined, but nothing else.

![The red tiles are the highest elevation while the white tiles are the lowest.](/assets/terra/elevation.svg)

### Step 2 - Simulate rainfall

Without going into too much detail, as this logic is subject to change, we simulate rainfall across the terrain. To do this, we first define where oceans will form based on which tiles are below sea level. Then, we pick a prevailing wind direction, which is uniform over the terrain. From there we can simulate evaporation (which occurs over bodies of water) and rainfall (which collects on tiles). This simulation is elevation-aware, meaning the spread of rainfall is affected by mountains. So land that is downwind of bodies of water gets the most rain, while land downwind of a mountain range won't get very much rain at all.

At this point, each land tile will have some amount of rainfall assigned to it, which will be a function of its proximity to the ocean plus proximity to mountains and other elevation features. From here we can move onto the next step, which is simulating how that water flows and collects.

![The green tiles are the get the most rainfall while the white are the driest.](/assets/terra/humidity.svg)

### Step 3 - Simulate runoff

Runoff simulation is the process of simulating how water flows from one tile to the next, and where that runoff collects. The purpose of this step is to determine where rivers and lakes would naturally form on the terrain. The actual algorithms involved here are pretty complicated and subject to change so I won't detail them too much, but the simplified version is this:

For each tile, we track two things:

1. How much water collects on it
2. How much water flows over it, including where it flows from and where it flows to

Once we have those, we can easily place lakes on tiles that collect a lot of water and rivers on tiles that have high water flow rates. When it's all said and done, here's what our map will look like:

![In this map, green represents runoff flow while blue is collected runoff. So the greenest tiles will become rivers, while the bluest will become lakes. Black tiles have little to no runoff flow over them, and gray tiles are ocean.](/assets/terra/runoff.svg)

### Step 4 - Assign biomes

Terra has a number of different biomes, which are assigned to tiles based on each tile's individual elevation and humidity. By now we know what elevation is, but what is humidity? Humidity is derived from rainfall, meaning tiles that get the most rain are the most humid. Makes sense, right?

Because of the methodology we use to generation elevation and simulate rainfall, they both form in smooth gradients where each tile is going to have a pretty similar elevation & humidity to the ones next to it. This means that biomes form in nice, natural-looking clusters.

So after all these steps, we end up with our final product!

![Tile color here represents biomes. The darkest green is jungle, the tan is plains, etc.](/assets/terra/final.svg)

## So what are you gonna do with this?

Right now this project exists on its own, meaning I'm not using it as part of any other projects. But given its modular and configurable design, I plan to use it as part of a few different game ideas that I have. Interesting terrain can be used in all kinds of different ways to make games feel varied and immersive. For now though, I'm just working on fleshing out this project.

TL;DR: You'll have to wait and see.

## Can I use it?

Please do! The crate isn't published to [crates.io](https://crates.io) (yet), but you can pull it in via the git URL, with something like this:

```toml
terra = { git = "https://github.com/LucasPickering/terra-rs", branch = "master" }
```

If do you start using this, please let me know what you think! Always open to suggestions, and if people are actually using this I can put it up on `crates.io` to make usage easier.

## Demo

This demo is a simple TypeScript app that renders Terra terrain in 3D, entirely in the browser. This is accomplished by compiling Terra to [WebAssembly](https://webassembly.org/), then importing it from the TypeScript app. This is just a simple example of what you can do with Terra. The standalone version is available at [terra.lucaspickering.me](https://terra.lucaspickering.me/).
