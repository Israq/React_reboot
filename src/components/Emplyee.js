const Employee = function (props) {
  return (
    <div class="m-2 flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 border border-gray-200 rounded-lg shadow-sm">
      <img
        class="object-cover rounded-full h-[100px] w-[100px] mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0"
        src={props.img}
        alt="employee"
      />
      <div class="space-y-2 text-center sm:text-left">
        <div class="space-y-0.5">
          <p class="text-lg font-semibold text-black">{props.name}</p>
          <p class="font-medium text-gray-500">{props.role}</p>
        </div>
        <button class="border border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 px-4 py-2 rounded-md transition-colors">
          Message
        </button>
      </div>
    </div>
  );
};

export default Employee;
