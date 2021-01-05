var writer = {
    location: { pathname: "/product/5ef2e223cd9884bbe5cc7069", search: "", hash: "", state: undefined },
    user: {
        userData: {
            email: "apple@gmail.com",
            image: "http://gravatar.com/avatar/1609657922?d=identicon",
            isAdmin: false,
            isAuth: true,
            name: "apple",
            role: 0,
            _id: "5ff16e421474a740131cba5a"
        }
    }
}
writer = writer.user.userData;
const writerId = writer['_id']
console.log(writerId)