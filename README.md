# borislavskyspolek.cz

Jednostránkový statický web Bořislavského spolku, z.s. Čisté HTML + CSS + JS, žádný build krok, žádný backend, žádné cookies.

## Nasazení (Cloudflare Pages)

Obsah této složky patří do kořene repozitáře.

- Build command: *žádný*
- Build output directory: `/` (kořen)
- `_headers` nastaví bezpečnostní hlavičky (CSP, HSTS, nosniff, frame-ancestors) a roční cache pro `/assets/*`.

## Soubory

| Soubor | K čemu je |
| --- | --- |
| `index.html` | celá stránka: hlavička, Novinky, O nás, Kontakty, patička |
| `styles.css` | veškerý styl; barvy a rozměry jsou nahoře jako CSS proměnné |
| `script.js` | jediné JS na webu — otevírání mobilního menu |
| `_headers` | bezpečnostní a cache hlavičky pro Cloudflare Pages |
| `assets/fonts/` | Space Grotesk, variabilní TTF, hostovaný lokálně (SIL OFL, viz `OFL.txt`) |
| `assets/logo/` | logo spolku, fialová a bílá varianta |
| `assets/img/` | grafiky pozvánek, fotografie, favicon, OG obrázek |

## Jak přidat pozvánku

1. V `index.html` najdi komentář **ŠABLONA POZVÁNKY** v sekci `#novinky`.
2. Zkopíruj blok `<article class="event"> … </article>` z komentáře a vlož ho **nad** stávající pozvánky — nejnovější akce je nahoře.
3. Vyplň název, datum, čas, místo a jednu až tři věty popisu.
4. Grafika je nepovinná. Když je, ulož ji do `assets/img/` jako WebP (šířka 1400 px stačí) a doplň `width`/`height` — bez nich stránka při načtení poskakuje.
5. Nech na webu nanejvýš 3–6 pozvánek. Web není archiv, starší akce smaž.

Psaní podle vizuální identity: datum s tečkami (`19. 9. 2026`), čas s tečkou a pomlčkou (`9.30–18.00`), věty malým písmem, žádné emoji.

## Když se nic nechystá

Smaž `<article class="event">` a odkomentuj blok **PRÁZDNÝ STAV** hned pod ním. Zobrazí se text „Právě nechystáme žádnou akci, sledujte náš Facebook." s ilustrací.

## Obrázky

Fotografie ukládej jako WebP, dlouhá strana max 1400 px, kvalita ~0,6–0,8. Cíl je do ~200 kB na první načtení bez fotografií; stránka bez pozvánkové grafiky se do toho vejde.

OG obrázek (`assets/img/og.jpg`, 1200 × 628) se ukazuje při sdílení na Facebooku. Při větší akci ho vyměň za grafiku té akce a v `index.html` uprav `og:title` a `og:description`.

## Barvy

| Barva | Kód | Kde |
| --- | --- | --- |
| růžová | `#F8C8DF` | pozadí stránky |
| fialová | `#524E9C` | text, linky, rámečky, patička |
| bílá | `#FFFFFF` | pozadí sekcí Novinky a Kontakty |

Fialová na růžové má kontrast 4,9 : 1 a splňuje WCAG AA. Sytější obrazovkovou dvojici z identity (`#FFC2FB` + `#4848F0`) web nepoužívá — má kontrast jen 4,1 : 1 a AA by neprošla.
