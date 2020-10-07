const classHomeHeader = document.querySelector('[data-js=header_home]')
const classHomeMain = document.querySelector('[data-js=main_home]')

const classBookmarksHeader = document.querySelector(
  '[data-js=header_bookmarks]'
)
const classBookmarksMain = document.querySelector('[data-js=main_bookmarks]')

const classCreateHeader = document.querySelector('[data-js=header_create]')
const classCreateMain = document.querySelector('[data-js=main_create]')

const classProfileHeader = document.querySelector('[data-js=header_profile]')
const classProfileMain = document.querySelector('[data-js=main_profile]')

const btnHome = document.querySelector('[data-js=btn_home_nav]')
const btnBookmarks = document.querySelector('[data-js=btn_bookmarks_nav]')
const btnCreate = document.querySelector('[data-js=btn_create_nav]')
const btnProfile = document.querySelector('[data-js=btn_profile_nav]')

btnHome.addEventListener('click', () => {
  classHomeHeader.classList.remove('d-none')
  classHomeMain.classList.remove('d-none')

  classBookmarksHeader.classList.add('d-none')
  classBookmarksMain.classList.add('d-none')

  classCreateHeader.classList.add('d-none')
  classCreateMain.classList.add('d-none')

  classProfileHeader.classList.add('d-none')
  classProfileMain.classList.add('d-none')
})

btnBookmarks.addEventListener('click', () => {
  classHomeHeader.classList.add('d-none')
  classHomeMain.classList.add('d-none')

  classBookmarksHeader.classList.remove('d-none')
  classBookmarksMain.classList.remove('d-none')

  classCreateHeader.classList.add('d-none')
  classCreateMain.classList.add('d-none')

  classProfileHeader.classList.add('d-none')
  classProfileMain.classList.add('d-none')
})

btnCreate.addEventListener('click', () => {
  classHomeHeader.classList.add('d-none')
  classHomeMain.classList.add('d-none')

  classBookmarksHeader.classList.add('d-none')
  classBookmarksMain.classList.add('d-none')

  classCreateHeader.classList.remove('d-none')
  classCreateMain.classList.remove('d-none')

  classProfileHeader.classList.add('d-none')
  classProfileMain.classList.add('d-none')
})

btnProfile.addEventListener('click', () => {
  classHomeHeader.classList.add('d-none')
  classHomeMain.classList.add('d-none')

  classBookmarksHeader.classList.add('d-none')
  classBookmarksMain.classList.add('d-none')

  classCreateHeader.classList.add('d-none')
  classCreateMain.classList.add('d-none')

  classProfileHeader.classList.remove('d-none')
  classProfileMain.classList.remove('d-none')
})

/* =====================BOOKMARKS========================= */

const BookmarkFirst = document.querySelector('[data-js=bookmark_first]')
const BookmarkSecond = document.querySelector('[data-js=bookmark_second]')

BookmarkFirst.addEventListener('click', () => {
  BookmarkFirst.classList.toggle('card__bookmark-icon--active')
})
BookmarkSecond.addEventListener('click', () => {
  BookmarkSecond.classList.toggle('card__bookmark-icon--active')
})

/* =====================ANSWER========================= */

const btnShowAnswer = document.querySelector('[data-js=btnShowAnswerFirst]')
const classAnswer = document.querySelector('[data-js=answerFirst]')

btnShowAnswer.addEventListener('click', () => {
  classAnswer.classList.toggle('d-none')
})
