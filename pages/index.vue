<template>
  <div class="flex justify-center p-4 m-12">
    <div>
  <h1 class="text-violet-500 text-8xl font-bold">Wir kreieren Lösungen.</h1>
  <p class="text-lg mt-6 max-w-prose">
    Unser Anspruch besteht aus einer projektbezogenen Zusammenarbeit, um ihr Unternehmen zukunftsfähig durch das digitale Zeitalter zu bringen.
    Unsere Kernarbeit findet im Webdevelopment und in der ganzheitlichen Kampagnengestaltung für Ihr Unternehmen statt. Gerne werfen wir einen Blick auf Ihre Prozesse und identifizieren Möglichkeiten zur Effizienzsteigerung.
  </p>
  <UButton
      icon="i-heroicons-envelope-solid"
      size="md"
      color="violet"
      class="mt-6"
  >
    Kontakt aufnehmen</UButton>
    </div>
  <NuxtPicture format="jpg" src="/teamwork.jpg" height="700px" width="50%"/>
  </div>
  <br>
  <p class="text-center text-violet-500 text-4xl font-bold"> Unser Team - Wir sind die K&A</p>

<div class="flex justify-evenly mt-14">
  <ProfileCard picture="/profiles/robin-cropped.jpg"
               email="www.example.com"
               linkedin="www.example.com"
               name="Robin Antonjuk"
               title="Geschäftsführender Gesellschafter und verantwortlich für die technische Umsetzung"
               uni="Student der angewandten Informatik an der Hochschule Flensburg"/>

  <ProfileCard picture="/profiles/hero.png"
               email="www.example.com"
               linkedin="www.example.com"
               name="Linas Kuklys"
               title="Geschäftsführender Gesellschafter und verantwortlich für betriebswirtschaftliche Abläufe"
               uni="Student der Business-Economics an der Christian-Albrechts-Universität zu Kiel"/>

</div>

  <p>dahwd</p>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Reaktive Daten
const count = ref(1)

// Methoden
const increment = () => {
  count.value++
}

// Lifecycle Hooks
onMounted(() => {
  console.log('Komponente wurde gemountet')
})

// Weitere Logik hier...
</script>

<style scoped>

</style>