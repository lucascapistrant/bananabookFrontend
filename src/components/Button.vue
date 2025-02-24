<template>
  <button :class="[type, { 'block': block }]">
    <slot></slot>
  </button>
</template>

<script setup>

defineProps({
  type: {
    type: String,
    default: 'primary'
  },
  block: {
    type: Boolean,
    default: false,
    required: false
  }
})
</script>

<style>
button {
  padding: 10px 30px;
  outline: 0;
  border: 0;
  font-size: 2rem;
  border-radius: 20px;
  font-family: var(--font-body);
}

.primary {
  background: var(--color-primary);
}
.secondary {
  background: var(--color-secondary);
}
.accent {
  background: var(--color-accent);
}
.outline {
  background: none;
  border: 2px solid var(--color-accent);
  color: var(--color-accent);
}

.block {
  padding: 10px 0;
  width: 100%;
}
</style>