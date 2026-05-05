type props = {
  uvValue: number[];
};
export default function UVCard({ uvValue }: props) {
  return (
    <>
      <h1>UV_vALUE</h1>
      <h1>{uvValue[0]}</h1>
    </>
  );
}

// uvIndexEl.innerHTML = `<strong class="detail-value">${daily.uv_index_max[0]}</strong>`;
// uvIndicator.style.left = `${daily.uv_index_max[0] * 10}%`;
