# 2_Godkendelsesopgave

## Videoprodukt


https://user-images.githubusercontent.com/59806877/198656221-3218d922-dddd-463d-8ddf-4a4ff09a7ba1.mp4




https://user-images.githubusercontent.com/59806877/198656277-806e55d5-10cb-46c1-9e2f-38aa420f8975.mp4



## Læringsdagbog  

### Dag 1
Jeg vil lave en mere uddybet bruger som indeholder navn, interesser, mail og forhåbentlig vis placering. Hertil vil jeg gøre så man kan se sin information på settings siden og måske endda ændre i det. Dette kræver at jeg tilføjer en real time database fra firebase, hvilket vi har gjort brug af før i øvelsestimerne, så jeg forventer jeg kan gøre brug af dette her. Hvis der er tid til det vil jeg også gerne lave en database for de forskellige begivenheder, og hvilke interesser de er linket til. 

Efter at  have siddet med opgaven i noget tid, sidder jeg fanget med at hente dataen fra firebase. Det er lykkedes mig at tilføje den ønskede data når man opretter en bruger og det bliver uploadet til firebase, men jeg kan ikke få det hentet uden at der sker fejl. Her har jeg prøvet at søge både på google og YouTube, men det er svært at finde en guide, som både bruger react native og firebase, som på samme tid henter data. Stackoverflow har heller ikke rigtig været en hjælp, da jeg ikke har fundet et problem der minder om mit eget endnu. Jeg er sikker på at jeg bare skal undersøge det lidt dybere, men det er et irriterende problem lige nu. 

Jeg er ikke noget lige så langt som jeg havde håbet i dag. Jeg bliver ved med at sidde fast i småfejl, som tager lang tid at løse, selvom de egentlig er meget simple. Lige nu er målet at tage afstand til koden og komme tilbage til den med friske øjne senere. 

### Dag 2
Denne dag var ikke særlig produktiv. Jeg blev ved med at sidde fast i små fejl, som tog alt for lang tid at løse. Her er det dog stadig gået fremad, da jeg har fundet ud ad hvordan man henter en enkelt bruger. Hertil har jeg også fået ændret måden der bliver uploadet til databasen, så authentication og firestore databaserne bruger de samme id'er for brugerne. Dette har gjort det muligt at hente brugerens oplysninger og har også til formål at fremtidssikre applikationen. 

Dette er dog det eneste fremskridt der er blevet lavet i koden. Dette er lidt skuffende, da det betyder jeg ikke kan lave den store ændring fra sidste godkendelsesopgave, da jeg her har arbejdet mere med database funktionalitet. 

### Dag 3
Der er nu blevet tilføjet en ændre bruger funktionalitet til appen. Her er det blevet muligt at ændre navnet og interesserne på brugeren, hvorefter det bliver opdateret i databasen. Det blev kort overvejet, hvorvidt mailen også skulle ændres, men da denne bliver brugt til authentication, var det besluttet bare at lade den være. Desværre er det ikke lykkedes at opdatere selve appen med den nye data. selve databasen bliver opdateret, men man skal reloade appen før man kan se ændringerne. 

Generelt er der ikke blevet lavet så meget på appen som ønsket, men da det andet gruppemedlem har større fokus på indhold, hvor jeg har fokus på det mere funktionelle, er dette stadig et skridt i den rigtige retning. 
