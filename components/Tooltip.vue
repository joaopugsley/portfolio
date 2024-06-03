<script setup lang="ts">
  const activator = ref();
  const show = ref(false);
  const position = ref({
    x: 0,
    y: 0,
  });

  const onRef = (element: any) => {
    activator.value = element;
  }

  const onMouseenter = (event: MouseEvent) => {
    const [rects] = activator.value.getClientRects();

    position.value = {
      x: rects.x + rects.width/2,
      y: rects.y - rects.height + 5,
    };

    show.value = true;
  }

  const onMouseleave = () => {
    show.value = false;
  }

  const style = computed(() => ({
    top: `${position.value.y}px`,
    left: `${position.value.x}px`,
  }));

</script>

<template>
  <slot 
    name="trigger"
    :attrs="{
      ref: onRef,
      onMouseenter,
      onMouseleave
    }"
  />
  <Teleport to="body">
    <transition
      enter-active-class="transition duration-100"
      leave-active-class="transition duration-100"
      enter-from-class="opacity-0 translate-y-2 scale-0"
      leave-to-class="opacity-0 translate-y-2 scale-0"
    >
      <div
        v-if="show"
        class="fixed rounded-md bg-zinc-900 border border-zinc-800 drop-shadow-md px-2 py-1 text-center z-50 -translate-x-1/2 select-none"
        :style="style"
      >
        <slot />
      </div>
    </transition>
  </Teleport>
</template>
