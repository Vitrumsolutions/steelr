# Gerda collection: proposed changes to llms.txt and llms-full.txt

Status: DRAFT for owner approval. Nothing in `public/llms.txt` or `public/llms-full.txt` has been changed. These two files are gated (the `/panel-llms` review plus owner approval), so this document is the proposal that goes through that gate.

## Why this needs a decision, not just an addition

Both files currently describe SteelR in absolute terms that stop being true once a Gerda range is on the site:

| Current wording (llms.txt) | Problem once Gerda is listed |
|---|---|
| "There are no standard sizes and no off-the-shelf designs, every door is made to measure for the individual property." | Gerda doors are catalogue designs made in set size ranges. |
| "Every door is individually designed, manufactured in our UK workshop" | Gerda doors are made by Gerda in Starachowice, Poland. |
| "Every door is PAS 24 certified, ISO 9001 manufactured, Secured by Design approved by the UK police, FD30S fire and smoke rated, and UK Manufactured." | None of these could be confirmed for Gerda doors on a manufacturer source. |
| "Standard residential specification (every door) is BS EN 1627:2011 RC4" | Gerda doors are RC2 or RC3 (Thermo Prime 75 is RC2 only). |

If the Gerda section is simply appended, an AI assistant reading the file can combine the two and tell a customer that a Gerda door is RC4, PAS 24 certified or UK made. That is the risk to manage.

## Recommended approach

1. Scope the absolute statements to the bespoke product: change "every door" to "every SteelR bespoke door" in the lines above (same edit in llms-full.txt wherever the phrase recurs).
2. Add one clearly fenced Gerda section to each file, opening with a sentence that says the bespoke certifications do not apply to it.

## Proposed new section (same text in both files)

```
## Gerda Collection (supplied and installed by SteelR)

SteelR also supplies and installs the Gerda residential door collection. Gerda doors are a separate product from SteelR bespoke doors. They are catalogue designs made by Gerda in Starachowice, Poland, in set size ranges. The SteelR bespoke certifications listed elsewhere in this file (BS EN 1627 RC4, LPS 1175 SR3 and SR4, LPS 1673, PAS 24, Secured by Design, FD30S, UK Manufactured) describe SteelR bespoke doors only and do not apply to Gerda doors.

Collection page: https://steelr.co.uk/gerda-doors

- Gerda Optima 60: 60 mm door leaf, Ud 1.0 W/m²K solid and 1.3 W/m²K glazed, EN 1627 RC2 or RC3 depending on door size and design, 44 designs in the Tempo, Classic and Elite 3D series. https://steelr.co.uk/gerda-doors/optima-60
- Gerda Thermo Premium 75: 75 mm door leaf with thermal break, Ud 0.8 W/m²K solid and 1.1 W/m²K glazed, EN 1627 RC2 or RC3 depending on door size and design, 71 designs in the Tempo, Quadro, Air Glass and Elite 3D series. https://steelr.co.uk/gerda-doors/thermo-premium-75
- Gerda Thermo Prime 75: 75 mm door leaf with thermal break, Ud 0.79 W/m²K solid and 0.9 W/m²K glazed, EN 1627 RC2, 63 designs, heights up to 2400 mm in selected colours and designs. https://steelr.co.uk/gerda-doors/thermo-prime-75

Sizes: most designs are made 840 to 1130 mm wide and 1950 to 2200 mm high, in 10 mm increments. Side lights and top lights are available.
Finishes: thirteen standard colours and woodgrains, further colours and the RAL range.
Locking: Optima 60 and Thermo Premium 75 use the Gerda ZW 2000 main lock with a ZW 500 additional lock. Thermo Prime 75 uses a 5-point mortise lock or a 3-point automatic lock. A tedee smart lock can be added.

### Does SteelR supply Gerda doors?
SteelR supplies and installs three Gerda residential door ranges: Optima 60, Thermo Premium 75 and Thermo Prime 75, with 104 designs between them.

### What is the difference between a Gerda door and a SteelR bespoke door?
SteelR bespoke doors are steel doors designed and made to measure in the UK for one opening, certified to BS EN 1627 RC4 (single leaf, unglazed) as standard. Gerda doors are catalogue designs with an insulated, metal faced leaf, made by Gerda in Poland in set size ranges and rated RC2 or RC3.
```

## Open points for the owner before this goes through the gate

- Lead time for Gerda doors (not stated anywhere I could source; the site currently says it is confirmed at quotation).
- Warranty on Gerda doors in the UK (not found on any manufacturer source).
- Whether PAS 24 or Secured by Design applies to the UK-supplied Gerda doors. If the supplier can provide the certificate, it can be added. Without a document it stays out.
