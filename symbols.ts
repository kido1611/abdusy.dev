import type { InjectionKey } from 'vue'
import type { UserInject } from './types'

export const ProvideInjectKey: InjectionKey<UserInject> = Symbol('provide-inject')
