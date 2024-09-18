# ts-brasil - WIP
## Gerador
- [x] CPF
- [x] CNPJ
- [x] CEP
- [ ] Telefone
- [ ] RG
- [ ] CNH
- [ ] Nome
- [ ] Endereço

## Validador
- [x] CEP
- [x] CPF
- [x] CNPJ
- [ ] Telefone
- [ ] RG
- [ ] CNH

- ## Máscaras
- [x] CEP
- [x] CPF
- [x] CNPJ
- [ ] Telefone
- [ ] RG
- [ ] CNH

# Benchmarks

## CEP
lib | avg (ns) | p99 (ns) | speedup
--- | --- | --- | ---
ts-brasil | 1.94 | 2.00 | 1.00x
js-brasil's faker | 78.28 | 157.73 | 40.37x
rhaymisonbetini's faker | 193.96 | 349.68 | 100.03x

## CPF
lib | avg (ns) | p99 (ns) | speedup
--- | --- | --- | ---
ts-brasil | 147.06 | 285.55 | 1.00x
rhaymisonbetini's faker | 282.47 | 455.90 | 1.92x
tamnil's faker | 348.20 | 500.88 | 2.37x
js-brasil's faker | 13479.58 | 19950.00 | 91.66x

## CNPJ
lib | avg (ns) | p99 (ns) | speedup
--- | --- | --- | ---
ts-brasil | 188.69 | 329.96 | 1.00x
rhaymisonbetini's faker | 300.39 | 467.14 | 1.59x
tamnil's faker | 1407.68 | 2950.00 | 7.46x
js-brasil's faker | 16711.41 | 23080.00 | 88.56x