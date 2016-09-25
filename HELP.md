# AngularJS - prezentacja na AngularJS Warsaw #3

Data prezentacji: 2015-08-26

* Prezentacja: jak się zacząłem uczyć AngularJS?
    * Jak przebiegały moje kroki
    * Eksperymentalna prezentacja, aby zachęcić wszystkich, którzy zaczynają
    * Moje doświadczenie = zero praktyki
    * Na podstawie książki - fotki z karteczek

Prezentacja: AngularJS: Q&A

* Nowy projekt z użyciem wersji 1.4 oraz ES6
    * zagrożenia projektu? IE8
    * brak doświadczenia zespołu deweloperskiego
    * code review
    * jak używać ES6 z wersją 1.4?
* AngularJS to kolejny młotek
    * jak powinno się używać? separacja odpowiedzialności
    * nie zapominamy o JS: prymitywy przekazywane przez wartość, a obiekty przez referencję

Dowiedzieć się:

* różnica między $digest i $apply
* w $timeout nie trzeba dawać $apply
* zapoznać się ze wszystkimi dyrektywami w 1.4
* co się stanie gdy stworzymy 2 moduły o takiej samej nazwie
* czy można zniszczyć $rootScope?

Pytania:

* AngularJS
    * Czy „Brad Green” jest autorem AngularJS?
    * Wstrzykiwanie zależności (dependency injection), prawo Demeter (zasada minimalnej wiedzy)
    * Pytanie: Co jest pierwsze po interakcji użytkownika, aktualizacja modelu czy widoku?
    * Zadanie: Co jeśli element będzie miał 2 dyrektywy ng-show i ng-hide? Która jest ważniejsza? Czy zależy to od kolejności definiowania?
    * Czy nie powinno się zawsze wyrejestrowywać $watch-a?
    * Batarang (Plugin do Chrome) - automatycznie wyszukuje kosztowne operacje
    * $on, $emit, $broadcast
* AngularJS. Pierwsze kroki
    * Dlaczego nie powinniśmy wywoływać cykl $digest bezpośrednio, tylko w użyciem $apply?
    * Czy nie jest lepiej używać Arrow Function do zatrzymania kontekstu, zamiast wywoływać $apply?
    * Czy podczas wyświetlenie obiektu zostanie on zrzutowany do stringa?
    * Czy nie lepiej tworzyć service z użyciem prototypów? Czy kontroler może wstrzyknąć inny kontroler?
    * Atrybut dyrektywy ‚terminal’. Jeśli nie podam priorytetu to w jakiej kolejności uruchomią się nasze dyrektywy?
    * Co to jest ngModelController? Różnica między `required` a `ngRequired`.
    * Co to jest ngCloak?
    * Dalej nie wiem jak działa ngCloak?
    * ng-switch on? ng-switch-when
    * ngCut. Czy ngCut działa na `divach`?
    * Czy nie lepiej jest używać natywnego forEach?
    * angular.injector
    * Po co używać angular.tolowercase i angular.touppercase skoro jest String.prototype.toLowerCase oraz String.prototype.toUpperCase?
    * Co daje nam angular.reloadWithDebugInfo?
    * Co to jest $scope.$parent?
    * Jak bardzo :: poprawiają performance?
    * Rozwiązanie zagadki: $scope.$apply vs $scope.$digest
