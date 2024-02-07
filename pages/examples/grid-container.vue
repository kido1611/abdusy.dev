<template>
  <main class="content-grid bg-neutral-800 text-white">
    <section class="py-6 col-[content]">
      <h2>Title</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa illum,
        fugiat ut ab repellendus molestiae? Nam, esse excepturi, optio eum
        quidem officia, temporibus eveniet nesciunt repellendus molestiae
        doloribus iste ut!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quibusdam
        et dolorum doloremque assumenda explicabo nihil nisi, ut facere natus
        itaque temporibus, eius eos necessitatibus, saepe ab rem minus
        praesentium.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis earum ea
        labore harum pariatur sed ab voluptatem laborum ex sapiente adipisci
        inventore, libero dolore fugit commodi! Ipsum, doloribus? Dolore,
        officiis.
      </p>
    </section>
    <section
      class="content-grid col-[full-width] bg-blue-800 py-6 *:col-[content]"
    >
      <h2>Title</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa illum,
        fugiat ut ab repellendus molestiae? Nam, esse excepturi, optio eum
        quidem officia, temporibus eveniet nesciunt repellendus molestiae
        doloribus iste ut!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quibusdam
        et dolorum doloremque assumenda explicabo nihil nisi, ut facere natus
        itaque temporibus, eius eos necessitatibus, saepe ab rem minus
        praesentium.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis earum ea
        labore harum pariatur sed ab voluptatem laborum ex sapiente adipisci
        inventore, libero dolore fugit commodi! Ipsum, doloribus? Dolore,
        officiis.
      </p>
    </section>
    <section class="py-6 col-[content]">
      <h2>Title</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa illum,
        fugiat ut ab repellendus molestiae? Nam, esse excepturi, optio eum
        quidem officia, temporibus eveniet nesciunt repellendus molestiae
        doloribus iste ut!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quibusdam
        et dolorum doloremque assumenda explicabo nihil nisi, ut facere natus
        itaque temporibus, eius eos necessitatibus, saepe ab rem minus
        praesentium.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis earum ea
        labore harum pariatur sed ab voluptatem laborum ex sapiente adipisci
        inventore, libero dolore fugit commodi! Ipsum, doloribus? Dolore,
        officiis.
      </p>
    </section>
    <section
      class="col-[full-width] md:col-[breakout] content-grid *:col-[content] bg-red-700 py-6"
    >
      <h2>Title</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa illum,
        fugiat ut ab repellendus molestiae? Nam, esse excepturi, optio eum
        quidem officia, temporibus eveniet nesciunt repellendus molestiae
        doloribus iste ut!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quibusdam
        et dolorum doloremque assumenda explicabo nihil nisi, ut facere natus
        itaque temporibus, eius eos necessitatibus, saepe ab rem minus
        praesentium.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis earum ea
        labore harum pariatur sed ab voluptatem laborum ex sapiente adipisci
        inventore, libero dolore fugit commodi! Ipsum, doloribus? Dolore,
        officiis.
      </p>
    </section>
  </main>
</template>

<script lang="ts" setup></script>

<style lang="postcss">
.content-grid {
  --padding-inline: 2rem;
  --content-max-width: 70ch;
  --breakout-max-width: 85ch;
  --breakout-size: calc(
    (var(--breakout-max-width) - var(--content-max-width)) / 2
  );

  --full: minmax(var(--padding-inline), 1fr);
  --breakout: minmax(0, var(--breakout-size));
  --content: min(100% - (var(--padding-inline) * 2), var(--content-max-width));
  /* display: grid; */
  /* grid-template-columns: [full-width-start] var(--padding-inline) [breakout-start] 100px [content-start] 1fr [content-end] 100px [breakout-end] var( */
  /* --padding-inline
    ) [full-width-end]; */
  @apply grid;
  @apply grid-cols-[[full-width-start]_var(--full)_[breakout-start]_var(--breakout)_[content-start]_var(--content)_[content-end]_var(--breakout)_[breakout-end]_var(--full)_[full-width-end]];
}
</style>
