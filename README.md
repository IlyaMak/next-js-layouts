1. --xl. Кнопка contact us в шапке должна иметь отступ справа 120px
2. --xl. Описание "Enver studio is a..." должно иметь margin-top: 24px
3. --xl. Часто используется 120px margin-left-right. Стоит вместо этого завести общий класс .row в котором стандартный отступ с 2 сторон будет 24px, а для xl 120px.
4. Использовать либу clsx для использования 2 и более классов в 1 элементе.
5. Строка не должна знать о следующей за ней строке, то есть стоит избегать margin-bottom и padding-bottom. Исключение - стоит оставить их если влияет на фон.
6. --xl. Описание каждой feature должно влезать в 2 строки, а не 3.
7. phone. Слишком большой margin-top у каждой feature.


Ideas:
1. Animate link color with "transition": white by default, blue on hover (ссылки в шапке и футере).
2. Animate button color with "transition": make them brighter on hover. Свойство brightness?
3. phone. Menu button. Toggle to show/hide absolute menu. Toggle icons: hamburger and "X".
4. Menu. Animate scroll to a certain div on click.
5. phone. Make carousel work.
6. Put features in JS array. Render them as a <Feature/> component.
7. Show headers during scroll (change opacity from 0 to 1). Try to use native CSS. 
8. Use internationalization next-i18next https://phrase.com/blog/posts/nextjs-i18n/
