import { _ as __nuxt_component_0 } from './Button-CujdPJBh.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import './index-aAg93XbI.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'tailwind-merge';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'ipx';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@vueuse/core';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_UButton = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col p-4 m-12 text-lg mt-16 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8" }, _attrs))}><h1 class="text-violet-500 text-8xl font-bold text-center">Karriere</h1><p class="mt-6"> Wir bitten um Verst\xE4ndnis, dass unser Projekt sich noch im Aufbau befindet und wir zum jetzigen Zeitpunkt davon absehen, Angestellte auf Vollzeit einzustellen. Eine Ausnahme machen wir jedoch, wenn du jung Bist, ein dynamisches Unternehmerisches Umfeld kennenlernen willst und einen Platz f\xFCr dein Schulpraktikum, die Ferien oder die Vorlesungsfreie Zeit suchst, dann besch\xE4ftigen wir dich gerne als Praktikant (m/w/d) (Remote). Wir werden in so einem Fall auf angemessen verantwortungsvolle Aufgaben achten und das Praktikum auf dich und deine Bed\xFCrfnisse ausrichten. </p><div class="mt-6">`);
  _push(ssrRenderComponent(_component_UButton, {
    to: "https://www.google.de",
    target: "_blank",
    color: "blue",
    icon: "i-heroicons-envelope-solid",
    size: "md"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Kontaktiere uns `);
      } else {
        return [
          createTextVNode("Kontaktiere uns ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/careers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const careers = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { careers as default };
//# sourceMappingURL=careers-B8Jyqxf4.mjs.map
