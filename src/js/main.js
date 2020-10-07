const classHomeHeader = getElement('[data-js=header_home]')
const classHomeMain = getElement('[data-js=main_home]')

const classBookmarksHeader = getElement('[data-js=header_bookmarks]')
const classBookmarksMain = getElement('[data-js=main_bookmarks]')

const classCreateHeader = getElement('[data-js=header_create]')
const classCreateMain = getElement('[data-js=main_create]')

const classProfileHeader = getElement('[data-js=header_profile]')
const classProfileMain = getElement('[data-js=main_profile]')

function getElement(selector) {
  return document.querySelector(selector)
}

/* navigation__icon--active
 */
const btnHome = getElement('[data-js=btn_home_nav]')
const btnBookmarks = getElement('[data-js=btn_bookmarks_nav]')
const btnCreate = getElement('[data-js=btn_create_nav]')
const btnProfile = getElement('[data-js=btn_profile_nav]')

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

const BookmarkFirst = getElement('[data-js=bookmark_first]')
const BookmarkSecond = getElement('[data-js=bookmark_second]')

BookmarkFirst.addEventListener('click', () => {
  BookmarkFirst.classList.toggle('card__bookmark-icon--active')
})
BookmarkSecond.addEventListener('click', () => {
  BookmarkSecond.classList.toggle('card__bookmark-icon--active')
})

/* =====================ANSWER========================= */

const btnShowAnswer = getElement('[data-js=btnShowAnswerFirst]')
const classAnswer = getElement('[data-js=answerFirst]')

btnShowAnswer.addEventListener('click', () => {
  classAnswer.classList.toggle('d-none')
})

/* =====================CREATE========================= */

const inputfieldQuestion = getElement('[data-js=inputfieldQuestion]')
const inputfieldAnswer = getElement('[data-js=inputfieldAnswer]')
const inputfieldTags = getElement('[data-js=inputfieldTas]')

const btnSubmit = getElement('[data-js=btnSubmit]')

/* btnSubmit.addEventListener('click', () => {
  inputfieldQuestion.value = ''
  inputfieldAnswer.value = ''
  inputfieldTags.value = ''
}) */

/* btnSubmit.addEventListener('click', () => {
  inputfieldQuestion.reset()
  inputfieldAnswer.reset()
  inputfieldTags.reset()
}) */

const entireForm = getElement('[data-js=entireForm]')

btnSubmit.addEventListener('click', () => {
  entireForm.reset()
})
