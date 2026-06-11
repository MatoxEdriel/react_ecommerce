# Guía: cómo pedir una tarea a Claude Code

No existe un formato JSON oficial — las tareas se piden en lenguaje natural.
Lo que sí existe es una **estructura recomendada** (guía de prompt engineering de Anthropic).
Esta guía es para ti (el humano); los agentes no la cargan, así que no consume tokens.

## La estructura de 4 partes

```text
[CONTEXTO]           Dónde y para qué es la tarea.
[TAREA]              Qué quieres que se haga, concreto.
[RESTRICCIONES]      Límites: librerías, ubicación de archivos, agente a usar.
[CRITERIO DE ÉXITO]  Cómo se verifica que está terminado.
```

### Ejemplo malo ❌

> hazme un login

Falta todo: dónde va, qué devuelve, cómo se valida. Provoca preguntas extra (más turnos = más tokens) o suposiciones equivocadas.

### Ejemplo bueno ✅

> Usa el agente `service-hook-builder`: crea `useLogin` en `src/modules/auth`
> que llame a `authService.login(email, password)` en `src/services`.
> Tipos en `src/interfaces/auth.ts`, sin librerías nuevas.
> Debe devolver `{ login, loading, error }` y compilar con `npm run build`.

## Reglas que más impactan

1. **Di el porqué, no solo el qué.** "Es para la página de login del módulo auth" permite tomar buenas decisiones sin preguntarte.
2. **Todo el contexto en el primer mensaje.** Una tarea bien especificada de entrada rinde mejor y gasta menos que aclararla en 5 turnos.
3. **Criterio de "hecho" verificable.** "Debe compilar", "debe devolver X" — no "que quede bien".
4. **Nombra el agente si ya sabes cuál toca.** `Usa el agente architecture: ¿dónde pongo X?` (ver AGENTS.md). Si no, Claude elige solo según las descripciones.
5. **Una tarea por petición.** Mezclar "crea el hook y de paso arregla el CSS y haz commit" diluye el foco; encadena tareas en mensajes separados.
6. **Referencia archivos con su ruta.** `src/context/dataContext.tsx` es inequívoco; "el archivo del contexto" no.

## Etiquetas XML (solo para prompts largos)

Para peticiones grandes con varias secciones, Anthropic recomienda delimitar con etiquetas:

```text
<contexto>
App React 19 con módulos auth/dashboard/support.
</contexto>

<tarea>
Diseña las interfaces TypeScript del flujo de autenticación.
</tarea>

<restricciones>
Solo tipos, sin implementación. Usa el agente software-design.
</restricciones>
```

Para peticiones cortas de chat no hacen falta.

## Plantillas rápidas

| Quiero...            | Plantilla |
|----------------------|-----------|
| Un componente        | `Usa component-builder: crea <Nombre> en <ruta>. Props: {...}. Estilos con las variables del tema. Debe <criterio>.` |
| Un hook/servicio     | `Usa service-hook-builder: crea use<X> en <ruta> que <hace qué>. Devuelve {...}. Tipos en src/interfaces.` |
| Saber dónde va algo  | `Usa architecture: ¿dónde pongo <cosa> que se usa en <módulos>?` |
| Diseñar tipos        | `Usa software-design: diseña las interfaces para <dominio>. Solo el snippet, no implementes.` |
| Registrar cambios    | `Usa changelog: registra los cambios de esta sesión en CHANGE.md.` |
| Resumen del proyecto | `Usa context: <pregunta corta sobre el estado/estructura>.` |

## Por qué no escribes JSON

El JSON existe una capa más abajo: Claude Code convierte cada mensaje tuyo en una
petición a la Messages API (`{model, system, messages, tools}`), inyectando CLAUDE.md
en el `system`. Tú solo escribes lenguaje natural; la estructura de arriba es para
que ese lenguaje natural sea preciso.
