import { MemoExoticComponent } from 'react'
import { EditorProps } from '@monaco-editor/react'

export declare global {
  type Keywords = {
    $useTextArea: Record<string, string>
    $useDateArea: Record<string, string>
    $useCodeArea: Record<
      string,
      {
        _value: string
        _language: MonacoLanguages
        _instance: MemoExoticComponent<(props: EditorProps) => JSX.Element>
      }
    >
    $useSelectOptions: Record<
      string,
      {
        _defaultValue: string | string[]
        _options: {
          _value: string
          _label?: string
          _assocPayload?: Seed
        }[]
      }
    >
  }

  type UseKeyword<T extends Keywords[`$use${T}`]> = Keywords[`$use${T}`][string]

  type MonacoLanguages =
    | 'plaintext'
    | 'abap'
    | 'apex'
    | 'azcli'
    | 'bat'
    | 'bicep'
    | 'cameligo'
    | 'clojure'
    | 'coffeescript'
    | 'c'
    | 'cpp'
    | 'csharp'
    | 'csp'
    | 'css'
    | 'cypher'
    | 'dart'
    | 'dockerfile'
    | 'ecl'
    | 'elixir'
    | 'flow9'
    | 'fsharp'
    | 'freemarker2'
    | 'freemarker2.tag-angle.interpolation-dollar'
    | 'freemarker2.tag-bracket.interpolation-dollar'
    | 'freemarker2.tag-angle.interpolation-bracket'
    | 'freemarker2.tag-bracket.interpolation-bracket'
    | 'freemarker2.tag-auto.interpolation-dollar'
    | 'freemarker2.tag-auto.interpolation-bracket'
    | 'go'
    | 'graphql'
    | 'handlebars'
    | 'hcl'
    | 'html'
    | 'ini'
    | 'java'
    | 'javascript'
    | 'julia'
    | 'kotlin'
    | 'less'
    | 'lexon'
    | 'lua'
    | 'liquid'
    | 'm3'
    | 'markdown'
    | 'mips'
    | 'msdax'
    | 'mysql'
    | 'objective-c'
    | 'pascal'
    | 'pascaligo'
    | 'perl'
    | 'pgsql'
    | 'php'
    | 'pla'
    | 'postiats'
    | 'powerquery'
    | 'powershell'
    | 'proto'
    | 'pug'
    | 'python'
    | 'qsharp'
    | 'r'
    | 'razor'
    | 'redis'
    | 'redshift'
    | 'restructuredtext'
    | 'ruby'
    | 'rust'
    | 'sb'
    | 'scala'
    | 'scheme'
    | 'scss'
    | 'shell'
    | 'sol'
    | 'aes'
    | 'sparql'
    | 'sql'
    | 'st'
    | 'swift'
    | 'systemverilog'
    | 'verilog'
    | 'tcl'
    | 'twig'
    | 'typescript'
    | 'vb'
    | 'wgsl'
    | 'xml'
    | 'yaml'
    | 'json'
}
