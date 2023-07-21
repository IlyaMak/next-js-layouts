Замечания

+ 1.  Выделить общую структуру страниц в отдельный компонент.
+ 2.  Открывать поисковой компонент на клик по инпуту поиска.
+ 3.  Сделать возможность оставлять комменты и отвечать на них.
+ 4.  Использовать <Link> вместо <a> для рабочих ссылок https://nextjs.org/docs/pages/building-your-application/routing/linking-and-navigating
+ 5.  contactsHref и blogHref лишние
+ 6.  Стилизовать активные ссылки в меню если текущий путь совпадает со ссылкой https://dev.to/yuridevat/how-to-add-styling-to-an-active-link-in-nextjs-593e
+ 7.  Активная ссылка в меню должна быть более тёмного цвета.
+ 8. --sm (max-width: 1279px); должно быть
+ 9.  Убрать везде eslint-disable @next/next/no-img-element
+ 10. Добавить PropTypes нужным компонентам.


Общее
+ 1. Неверный margin-top у пунктов меню должен быть 17px, а не 21. (3.5 + 3.5 + 10 = 17)
+ 2. Отступ от 1 пункта меню до инпута поиска немерный

Contacts xl:
+ 1. Неверные margin-top в контенте страницы

Поисковая колонка xl и sm :
+ 1. .short-article_article margin top должен быть 6px, а не 16.

Blog xl и sm:
+ 1. Неверный margin-top у "PINNED" 

Single-blog xl:
+ 1. Отступ от аватарки до текста справа должен быть 24px 

