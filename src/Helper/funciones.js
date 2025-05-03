import Swal from "sweetalert2";

export function alertaConfirmacion() {
  Swal.fire({
    title: "Great job fucker!!!",
    text: "dale al click que te gusta!!!",
    icon: "success",
  });
}

export function alertaError() {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
    footer: '<a href="#">Why do I have this issue?</a>',
  });
}
