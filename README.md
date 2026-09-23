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
| `index.html` | celá stránka: hlavička, Novinky, Proběhlé akce, O nás, Kontakty, patička |
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
5. Nech v Novinkách jen nadcházející akce. Proběhlou akci přesuň do sekce Proběhlé akce (viz níže).
6. Uprav hlavní CTA a sdílení podle nejbližší akce: datum v kapsli „Nejbližší akce“ v hero, `description`, `og:title`, `og:description`, případně `og:image`.

Psaní podle vizuální identity: datum s tečkami (`19. 9. 2026`), čas s dvojtečkou a pomlčkou (`9:30–18:00`, nikdy `9.30`), věty malým písmem, žádné emoji.

## Proběhlé akce

Sekce `#probehle-akce` pod Novinkami, **není v menu**. Je to harmonika (nativní `<details>`, bez JS): viditelný je jen nadpis „Proběhlé akce“, po rozkliknutí se rozbalí seznam.

Po akci:

1. Přesuň pozvánku z Novinek do `.archive__list` **na začátek seznamu** — nejnovější nahoře, nejstarší dole.
2. Zkrať ji podle komentáře **PROBĚHLÁ AKCE**: plakát, název, datum (bez času), místo, jedna až dvě věty s poděkováním (bez vymyšlených čísel a detailů o průběhu) a jediné tlačítko „Prohlédnout fotoreport z akce“ s odkazem na fotky.
3. Karta má třídu `event event--past`. Program, video a další detaily smaž.
4. V Novinkách pak uprav hlavní CTA a meta podle další nadcházející akce.

## Když se nic nechystá

Smaž `<article class="event">` a odkomentuj blok **PRÁZDNÝ STAV** hned pod ním. Zobrazí se text „Právě nechystáme žádnou akci, sledujte náš Facebook." s ilustrací.

## Obrázky

Fotografie ukládej jako WebP, dlouhá strana max 1400 px, kvalita ~0,6–0,8. Cíl je do ~200 kB na první načtení bez fotografií; stránka bez pozvánkové grafiky se do toho vejde.

OG obrázek (1200 × 628, JPEG, teď `assets/img/og-dusickovy-pruvod-2026.jpg`) se ukazuje při sdílení na Facebooku. Při nové akci ho vyměň za grafiku té akce **pod novým názvem souboru** — `/assets/*` má roční neměnnou cache, takže přepsaný soubor se stejným jménem by se prohlížečům ani Facebooku neobnovil. Pak v `index.html` uprav `og:image`, `og:image:alt`, `og:title` a `og:description`.

## Barvy

| Barva | Kód | Kde |
| --- | --- | --- |
| růžová | `#F8C8DF` | pozadí stránky |
| fialová | `#524E9C` | text, linky, rámečky, patička |
| bílá | `#FFFFFF` | pozadí sekcí Novinky a Kontakty |

Fialová na růžové má kontrast 4,9 : 1 a splňuje WCAG AA. Sytější obrazovkovou dvojici z identity (`#FFC2FB` + `#4848F0`) web nepoužívá — má kontrast jen 4,1 : 1 a AA by neprošla.

## Video

CSP v `_headers` teď nepovoluje žádné vložené rámy (iframe). Když budeš vkládat YouTube video, přidej do `Content-Security-Policy` direktivu `frame-src https://www.youtube-nocookie.com;` a vkládej adresu z domény youtube-nocookie.com.
