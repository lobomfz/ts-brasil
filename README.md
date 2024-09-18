# ts-brasil - WIP
## Faker
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

## Máscaras
- [x] CEP
- [x] CPF
- [x] CNPJ
- [ ] Telefone
- [ ] RG
- [ ] CNH

# Benchmarks

## Gerar CEP
lib | avg (ns) | p99 (ns) | speedup
--- | --- | --- | ---
lobomfz/ts-brasil | 1.72 | 1.72 | 1.00x
js-brasil/fakerbr | 79.70 | 134.11 | 46.30x
rhaymisonbetini/faker-brasil | 212.52 | 412.33 | 123.46x

## Gerar CPF
lib | avg (ns) | p99 (ns) | speedup
--- | --- | --- | ---
lobomfz/ts-brasil | 147.31 | 309.51 | 1.00x
rhaymisonbetini/faker-brasil | 275.53 | 421.78 | 1.87x
tamnil/Faker-br | 359.12 | 508.67 | 2.44x
brazilian-utils | 1399.03 | 6270.00 | 9.50x
js-brasil/fakerbr | 13365.01 | 19580.00 | 90.73x

## Gerar CNPJ
lib | avg (ns) | p99 (ns) | speedup
--- | --- | --- | ---
lobomfz/ts-brasil | 183.32 | 300.36 | 1.00x
rhaymisonbetini/faker-brasil | 294.36 | 451.84 | 1.61x
brazilian-utils | 1351.14 | 1765.94 | 7.37x
tamnil/Faker-br | 1477.55 | 2860.00 | 8.06x
js-brasil/fakerbr | 16488.54 | 23110.00 | 89.95x

## Gerar, validar e formatar CPF
lib | avg (ns) | p99 (ns) | speedup
--- | --- | --- | ---
lobomfz/ts-brasil | 416.32 | 550.86 | 1.00x
brazilian-utils | 2910.37 | 7650.00 | 6.99x

## Gerar, validar e formatar CNPJ
lib | avg (ns) | p99 (ns) | speedup
--- | --- | --- | ---
lobomfz/ts-brasil | 530.97 | 677.60 | 1.00x
brazilian-utils | 3165.68 | 9260.00 | 5.96x

## Validar e formatar CEP
lib | avg (ns) | p99 (ns) | speedup
--- | --- | --- | ---
lobomfz/ts-brasil | 112.04 | 252.65 | 1.00x
brazilian-utils | 141.90 | 298.89 | 1.27x