import { Text, View } from "react-native";

export default function Hero() {
  return (
    <View className="relative bg-blue-500">
      <View className="mx-auto lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <View className="px-6 pb-24 pt-10 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <View className="mx-auto lg:mx-0">
            <View className="hidden sm:mt-32 sm:flex lg:mt-16">
              <View className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <Text>Anim aute id magna aliqua ad ad non deserunt sunt. </Text>
                <Text className="whitespace-nowrap font-semibold text-indigo-600">
                  Read more
                </Text>
              </View>
            </View>
            <Text className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
              Data to enrich your online business
            </Text>
            <Text className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </Text>
            <View className="mt-10 flex items-center gap-x-6">
              <Text>Get started</Text>
              <Text className="text-sm font-semibold leading-6 text-gray-900">
                Learn more
              </Text>
            </View>
          </View>
        </View>
        <View className="relative lg:col-span-5 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <Text>Boy</Text>
        </View>
      </View>
    </View>
  );
}
