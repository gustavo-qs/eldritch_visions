<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const models = ref([
  { name: 'Owlin 1', available: true, path: '/owlin01' },
  { name: 'Owlin 2', available: true, path: '/owlin02' },
  { name: 'Owlin 3', available: true, path: '/owlin03' },
  { name: 'Plinia 1', available: true, path: '/plinia01' },
  { name: 'Plinia 3', available: true, path: '/plinia02' },
  { name: 'Rurik 1', available: true, path: '/rurik01' },
  { name: 'Z 1', available: true, path: '/z01' },
  { name: 'Yansen 1', available: true, path: '/yansen01' },
  { name: 'Monster 1', available: true, path: '/monster01' }
]);

const router = useRouter();

const navigateToModel = (model) => {
  if (model.available) {
    router.push(model.path);
  }
};
</script>

<template>
  <main>
    <nav class="menu">
      <h1 class="menu-title">AR Models</h1>
      <ul class="menu-list">
        <li
          v-for="model in models"
          :key="model.name"
          :class="{ unavailable: !model.available }"
          @click="navigateToModel(model)"
        >
          {{ model.name }} <span v-if="!model.available">(Unavailable)</span>
        </li>
      </ul>
    </nav>
  </main>
</template>

<style scoped>
.menu {
  background-color: #2c2f33;
  padding: 20px;
  border: 3px solid #d4af37;
  border-radius: 10px;
  font-family: 'Cinzel', serif;
  max-width: 400px;
  margin: 0 auto;
}

.menu-title {
  color: #d4af37;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
  text-shadow: 2px 2px #000;
}

.menu-list {
  list-style: none;
  padding: 0;
}

.menu-list li {
  color: #fff;
  padding: 10px;
  font-size: 1.2rem;
  border-bottom: 1px solid #d4af37;
  cursor: pointer;
  transition: background-color 0.3s;
}

.menu-list li:hover {
  background-color: #1f2326;
}

.menu-list li.unavailable {
  color: #666;
  cursor: not-allowed;
}

.menu-list li.unavailable:hover {
  background-color: transparent;
}
</style>