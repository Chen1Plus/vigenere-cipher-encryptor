<script setup lang="ts">
import { reactive, ref } from "vue";
import * as vigenereCipher from "./lib/vigenere-cipher";
import toPureText from "./lib/to-pure-text";

const input = reactive({
  methodE: true,
  key: "",
  message: "",
  strict: false,
  capital: false,
});
const output = ref("");
const copied = ref(false);

function encryptRequest() {
  if (input.methodE) {
    let inputText = input.message;
    if (input.strict) {
      if (input.capital) {
        inputText = toPureText(input.message, true);
      } else {
        inputText = toPureText(input.message);
      }
    }
    output.value = vigenereCipher.encrypt(toPureText(input.key), inputText);
  } else {
    output.value = vigenereCipher.decrypt(toPureText(input.key), input.message);
  }
  copied.value = false;
  input.message = "";
}

function copyOutput() {
  navigator.clipboard.writeText(output.value).then(() => (copied.value = true));
}
</script>

<template>
  <div class="container" style="max-width: 768px">
    <div class="card mb-1 mb-md-3 p-2 p-md-3">
      <div class="d-flex justify-content-between align-items-center">
        <div class="flex-shrink-1 me-2 me-md-3" style="word-break: break-word">
          <span v-if="output">{{ output }}</span>
          <span v-else>Output will be displayed here.</span>
        </div>
        <div v-if="output">
          <button
            type="button"
            class="btn btn-secondary"
            @click="copyOutput"
            :disabled="copied"
          >
            <span v-if="copied">Copied!</span>
            <span v-else>Copy</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="container" style="max-width: 768px">
    <form @submit.prevent="encryptRequest">
      <div class="row mb-1 mb-md-3">
        <label for="input-1" class="col-form-label col-12 col-md-2">Key</label>
        <div class="col-12 col-md-10">
          <input
            type="password"
            id="input-1"
            class="form-control"
            v-model="input.key"
            placeholder="Your Secret Key"
          />
        </div>
      </div>
      <div class="row mb-3">
        <label for="input-2" class="col-form-label col-12 col-md-2">
          Message
        </label>
        <div class="col-12 col-md-10">
          <textarea
            id="input-2"
            class="form-control"
            v-model="input.message"
            placeholder="Type Here"
            rows="4"
          ></textarea>
        </div>
      </div>
      <div class="row align-items-center no-select">
        <div class="col-12 col-md-auto mb-1 mb-md-0 me-4">
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="input-3"
              checked
              v-model="input.methodE"
            />
            <label class="form-check-label" for="input-3" v-if="input.methodE">
              Encrypt Mode
            </label>
            <label class="form-check-label" for="input-3" v-else>
              Decrypt Mode
            </label>
          </div>
        </div>
        <div
          class="col-12 col-md-auto offset-1 offset-md-0"
          v-if="input.methodE"
        >
          <div class="row">
            <div class="col-12 col-md-auto">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="input-4"
                  v-model="input.strict"
                />
                <label class="form-check-label" for="input-4">
                  Strict Mode
                </label>
              </div>
            </div>
            <div class="col-12 col-md-auto">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="input-5"
                  v-model="input.capital"
                  :disabled="!input.strict"
                />
                <label class="form-check-label" for="input-5"> Capital </label>
              </div>
            </div>
          </div>
        </div>
        <div class="col text-md-end mt-3 mt-md-0">
          <button type="submit" class="btn btn-primary">
            <span v-if="input.methodE">Encrypt</span>
            <span v-else>Decrypt</span>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
.no-select {
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}
</style>
