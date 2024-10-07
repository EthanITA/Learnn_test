<script lang="ts" setup>
import { ref } from "vue";

const choices = ["paper", "rock", "scissors"] as const;
type Choice = (typeof choices)[number];
type Result = "win" | "lose" | "draw";
type ResultDefinition = Record<Result, Choice>;

const resultColor: Record<Result, string> = {
  win: "text-green-800 font-bold",
  lose: "text-red-800 font-bold",
  draw: "text-gray-800 font-medium",
};

const definitions: Record<Choice, ResultDefinition> = {
  paper: { win: "rock", lose: "scissors", draw: "paper" },
  rock: { win: "scissors", lose: "paper", draw: "rock" },
  scissors: { win: "paper", lose: "rock", draw: "scissors" },
};

const c1 = ref<Choice>();
const c2 = ref<Choice>();

/**
 * Get c1's result against c2
 */
const getResult = (c1: Choice, c2: Choice): Result => {
  if (c1 === c2) return "draw";
  return definitions[c1].win === c2 ? "win" : "lose";
};

const getRandomChoice = () =>
  choices[Math.floor(Math.random() * choices.length)];

const choose = (c: Choice) => {
  c1.value = c;
  c2.value = getRandomChoice();
};
</script>

<template>
  <div class="h-full flex flex-col p-4">
    <h1 class="text-2xl font-bold">Rock Paper Scissors</h1>
    <div class="flex flex-col flex-1">
      <div id="p2" class="flex-1 items-center flex flex-col">
        <h2 class="text-xl font-bold">
          Player 2
          <span v-if="c1 && c2" :class="resultColor[getResult(c2, c1)]">
            ({{ getResult(c2, c1) }})
          </span>
        </h2>
        <span
          v-if="c1 && c2"
          :class="resultColor[getResult(c2, c1)]"
          class="flex-1 flex items-center text-lg text-gray-700 font-semibold"
        >
          {{ c2 }}
        </span>
      </div>
      <hr class="my-4 border-black border-2" />
      <div id="p1" class="flex-1 flex-col flex items-center">
        <h2 class="text-xl font-bold">
          Player 1
          <span v-if="c1 && c2" :class="resultColor[getResult(c1, c2)]">
            ({{ getResult(c1, c2) }})
          </span>
        </h2>
        <span
          v-if="c1 && c2"
          :class="resultColor[getResult(c1, c2)]"
          class="flex-1 flex items-center text-lg text-gray-700 font-semibold"
        >
          {{ c1 }}
        </span>
      </div>
    </div>
    <div class="space-x-2 mx-auto">
      <button v-for="choice in choices" :key="choice" @click="choose(choice)">
        {{ choice }}
      </button>
      <button
        @click="choose(getRandomChoice())"
        class="!bg-amber-500 hover:!bg-amber-600"
      >
        Auto
      </button>
    </div>
  </div>
</template>

<style scoped>
button {
  @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
}
</style>
