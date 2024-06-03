<template>
  <div class="w-full flex flex-col p-8 md:p-28 xl:p-36 2xl:p-48">
    <section class="w-full sm:w-3/4 z-10 flex flex-col space-y-5">
      <h1 class="text-4xl lg:text-5xl font-bold">Sobre Mim</h1>
      <p class="text-zinc-400 text-xl">Me chamo <span class="text-white">João Vitor</span>, tenho <span class="text-white">{{ getAge() }} anos</span> <Tooltip><template #trigger="{ attrs }"><button class="p-1 hidden lg:inline-block" v-bind="attrs"><Icon name="lucide:info"/></button></template><span>Este valor é atualizado automaticamente de acordo com minha data de nascimento</span></Tooltip> e sou desenvolvedor <span class="text-white">Full-Stack</span> com foco no <span class="text-white">Back-end</span>! Moro em <span class="text-white">Curitiba - PR</span> e desde pequeno sempre gostei muito de <span class="text-white">tecnologia</span> e sempre quis tê-la inserida na minha vida.</p>
      <p class="text-zinc-400 text-xl">Comecei na programação aos <span class="text-white">12 anos</span> de idade, quando criei meu <span class="text-white">primeiro website</span>, aos <span class="text-white">14</span>, fiz um <span class="text-white">curso de programação</span> que deu o pontapé inicial na minha <span class="text-white">carreira</span>. Desde então, <span class="text-white">apaixonei-me</span> pela área e soube que queria torná-la minha profissão.</p>
      <p class="text-zinc-400 text-xl">Ja trabalhei com <span class="text-white">inúmeras tecnologias</span> desde o <span class="text-white">back-end</span> até o <span class="text-white">front-end</span>. As linguagens que eu mais utilizo atualmente são <span class="text-white">JavaScript</span>, <span class="text-white">C#</span> e <span class="text-white">Rust</span>.</p>
      <p class="text-zinc-400 text-xl">Sinta-se livre para explorar meu <span class="text-white">portfólio</span> e entender um pouco mais sobre meu <span class="text-white">trabalho</span> e <span class="text-white">experiência</span>. Eu sempre estou buscando <span class="text-white">desafios</span> que me façam <span class="text-white">crescer</span> e <span class="text-white">evoluir</span> como profissional.</p>
    </section>
    <section class="w-full z-10 mt-10">
      <h2 class="text-2xl">Habilidades</h2>
      <Skills/>
    </section>
  </div>
</template>